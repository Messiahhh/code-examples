


### flex-shrink-x.html

例子一中flex属性起到了缩小元素的作用，但flex: 1我记得是不会改变元素flex-shrink的。所以写了一些demo。

例子二中使用了flex-grow， 从原理上flex-grow不会影响缩小，结果也证明如此。

例子三中flex-shrink确实正确的。

最后发现flex: <value>原来是flex: <value> 1 0的缩写，原来是我搞错了，囧

flex: <positive-number>
Equivalent to flex: <positive-number> 1 0. Makes the flex item flexible and sets the flex basis to zero, resulting in an item that receives the specified proportion of the free space in the flex container. If all items in the flex container use this pattern, their sizes will be proportional to the specified flex factor.
### flex-4
给outer定宽，而三个子元素的flex-basis的和超过宽，会进行缩放
但给容器加属性 flex-wrap: wrap。那么不会缩放，而是进行换行操作


无论是flex-grow还是flex-shrink
这个比例系数都是 各个元素 变化率和原先数值的商 的比值

flex-shrink
    (x0 - x) / x0 : (y0 - y) / y0 = flex-shrink-1 : flex-shrink-2
    x + y = container

flex-grow
    (x - x0) / x0 : (y - y0) : y0 = flex-grow-1 : flex-grow-2
    x + y = container


flex
    内容小于容器
        - flex-grow可以设置放大元素
        - 默认不设置flex-grow，即不放大元素，则刚好可以用justify-content来改变对齐
    内容大于容器
        - 先根据flex-wrap判断是否换行
            - 换行
            - 不换行，根据flex-shrink进行缩小

flex是一维布局，这里再讨论另一维的布局，这里假设flex-direction为row
因此下文讨论主轴指的是刚好是布局的方向（flex-direction），交叉轴是另一个方向。

考虑到flex是弹性布局，如果给定容器的交叉轴的长度，那么元素的cross size就等于交叉轴的长度。

如果不给定容器交叉轴长度， 而是给某个项目设置cross size， 那么交叉轴会等于这个cross size。
当使用align-items的时候，会设置交叉轴上的布局， 但此时似乎必须显示的写出项目的cross size才行，否则默认为0
