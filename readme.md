# MouseWheel_Roll 插件 v1.1.1
### 监听鼠标滚轮，滑动屏幕
### 安装：npm install topunet-mousewheel_roll

文件结构：
-------------
		1. /MouseWheel_Roll.js 放入项目文件夹jq（原生规范）或widget/lib（AMD规范）中

页面引用：
-------------

原生引用

        1. 页面底部引用最新版 /inc/Jquery.min.js#1.x.x
		2. Jquery后引用 /jq/MouseWheel_Roll.js

requireJS引用

        依赖MouseWheel_Roll.js和jquery.min.js#1.x，成功后返回对象MouseWheel_Roll。

调用方法：
--------------

1. 启动监听：

		var $roll = new MouseWheel_Roll();
        $roll.init({
            box: $(".box"), // 固定高度的外盒，overflow:hidden。无默认值
            scrollWrapper: $(".banner"), // 滚动的外盒对象，如$(ul)。无默认值
            scrollWrapper_child: $(".banner li"), // 子元素对象集，如$(li)。无默认值
            arrowUp: $(".arrowUp"), // 上箭头对象。无默认值
            arrowDown: $(".arrowDown"), // 箭头对象。无默认值
            duration: 800 // 滚屏速度(ms)，默认500
        });

2. 暂停监听：
		
		$roll.Pause.apply($roll);

3. 重启监听：

		$roll.reStart.apply($roll);

4. 执行滚动到某高度：

		$roll.Roll.apply(that, [top_px, callback]);
		@top_px: 滚动至高度_px
		@callback: 滚动结束回调

5. 全局变量：

		$roll.Paused: true-暂停中; false-监听中
		$roll.scrolling: true-正在执行滚屏动画
		$roll.current: 当前所在屏序号，0开始。直接调用$roll.Roll时，需在回调中调整此变量值


更新历史：
-------------
v1.1.1 (2017-07-12)

		完成并发布至 github & npm
		