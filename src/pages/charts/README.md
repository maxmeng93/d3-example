``` javascript
// d3 数据处理模板
var dataset = [10, 20, 30];
var p = d3.select('body').selectAll('p');

// 绑定数据后，分别返回 update enter exit 部分
var update = p.data(dataset);
var enter = update.enter();
var exit = update.exit();

// 1. update部分的处理方法
update.text(e => d);

// 2. enter部分的处理方法
enter.append('p').text(e => d);

// 3. exit部分的处理方法
exit.remove();
```

``` javascript
// 过滤器
selection.filter();

// 排序
selection.sort();

// 分别处理各元素
selection.each();

// call() 允许将选择集自身作为参数，传递给某一函数
d3.selectAll('div').call(myfun);
function myfun (selection) {
  selection.attr('name', 'value');
}
// 类似于
myfun(d3.selectAll('div'));
```
