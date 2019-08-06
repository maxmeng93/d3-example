/**
 * 读取guide.txt文件，并生成树结构数据
 */

const path = require('path');
const fs = require('fs');
const filePath = path.join(__dirname, 'guide.txt');

fs.readFile(filePath, function(err, data) {
  if (err) return console.error(err);
  const lines = data.toString().split('\n');
  let tree = {};

  lines.forEach(line => {
    if (!line) return;
    formatter(tree, line);
  });

  tree = formatter1(tree)

  fs.writeFile('./data.json', JSON.stringify(tree, null, 2), function(err) {
    if (err) console.log(err);
    console.log('文件写入成功');
  });
});

/**
 * 数据格式化
 * @param {Object} tree
 * @param {String} line
 * 输入：a.b.c
 * 输出：{ a: { b: { c : {} } } }
 */
function formatter(tree, line) {
  const arr = line.split('.');

  if (!tree[arr[0]]) tree[arr[0]] = {};

  if (arr.length > 1) formatter(tree[arr[0]], line.slice(line.indexOf('.') + 1));
}

/**
 * 数据格式化
 * @param {Object} tree
 * 输入：{ a: { b: { } } }
 * 输出：{ name: '', children: [ { name: a, children: [ { name: b, children: [] } ] } ] }
 */
function formatter1(tree) {
  let data = {
    name: '',
    children: tree
  };

  data.children = formatter2(data.children);

  return data;
}

function formatter2(children) {
  const arr = [];
  if (children instanceof Array) return children;
  for (let k in children) {
    let obj = {
      name: k,
      children: children[k]
    };
    obj.children = formatter2(obj.children);
    arr.push(obj);
  }
  return arr;
}
