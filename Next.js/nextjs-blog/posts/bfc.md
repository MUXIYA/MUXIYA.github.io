---
title: 'BFC'
date: '2020-10-22'
---

**BFC全称：block formatting context，译为:"格式化上下文"**

W3C官方介绍为： BFC他决定了元素融合对其内容定位，以及与其它元素的关系和相互作用，当涉及到可视化布局时，block formatting context 提供了一个环境，HTML在这个环境中，按照一定的规则进行布局。

简单来说就是，BFC是一个完全独立的空间（布局环境），让空间里的子元素不会影响到外面的布局。那么怎么使用BFC呢，BFC可以看做是一个CSS元素属性

**如何触发BFC**

- overflow：hidden
- display：inline-block
- position：absolute
- position：fixed
- display：table-cell
- display: flex

**BFC的规则**
- BFC就是一个块级元素，块级元素会在垂直方向一个接一个的排列
- BFC就是页面中的一个隔离的独立容器，容器的标签不会影响到外部标签
- 垂直方向的距离由margin决定，属于同一个BFC的两个相邻的标签外边距会发生重叠
- 计算BFC的高度时，浮动元素也参与计算

**BFC解决了什么问题**

1. 使用float脱离文档流，高度塌陷
2. margin边距重叠（为元素包裹一个盒子形成一共完全独立的空间，做到里面的元素不受外面布局的影响{包裹一层}）
3. 两栏布局。
