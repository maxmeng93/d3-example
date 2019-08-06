/**
 * 读取guide.txt文件，并生成树结构数据
 */

const path = require('path');
const fs = require('fs');

let tree = {};

setData();

async function setData() {
  const files = [
    'guide.txt',
    'annot_1.txt',
    'annot_2.txt'
  ];
  const arr = files.map(e => readFile(path.join(__dirname, e)));
  const [guide, annot1, annot2] = await Promise.all(arr);

  parseGuide(guide);
  parseAnnot1(annot1);
  parseAnnot2(annot2);

  fs.writeFile('./data.json', JSON.stringify(tree, null, 2), function(err) {
    if (err) console.log(err);
    console.log('文件写入成功');
  });
}

// 解析 parse.txt 文件
function parseGuide(data) {
  const lines = data.toString().split('\n');

  lines.forEach(line => {
    if (!line) return;
    formatter(tree, line);
  });

  tree = formatter1(tree);

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
}

// 解析 annot_1.txt 文件
function parseAnnot1(data) {
  const lines = data.toString().split('\n');
  lines.forEach(line => {
    if (!line) return;
    setAttr(tree, line);
  });

  function setAttr(tree, line) {
    var arr = line.split(/\s/);
    for (let i = 0; i < tree.children.length; i++) {
      if (tree.children[i].name === arr[0]) {
        tree.children[i][arr[1]] = arr[2];
        return;
      }
      setAttr(tree.children[i], line);
    }
  }
}

// 解析 annot_2.txt 文件
function parseAnnot2(data) {
  const lines = data.toString().split('\n');
  lines.forEach(line => {
    if (!line) return;
    setAttr(tree, line);
  });

  function setAttr(tree, line) {
    var arr = line.split(/\s/);
    for (let i = 0; i < tree.children.length; i++) {
      if (tree.children[i].name === arr[0]) {
        if (arr[1] === 'annotation') {
          tree.children[i][arr[1]] = line.slice(arr[0].length + arr[1].length + 2);
        } else {
          tree.children[i][arr[1]] = arr[2];
        }
        return;
      }
      setAttr(tree.children[i], line);
    }
  }
}

// 读取文件
function readFile (src) {
  return new Promise((resolve, reject) => {
      fs.readFile(src, (err, data) => {
          if (err) reject(err);
          console.log(`读取文件成功 ${src}`);
          resolve(data);
      });
  });
};
