define([
    "lib/jquery.min",
    "lib/MouseWheel_Roll"
], function($jquery, $MouseWheel_Roll) {
    var page_name = $("#script_page").attr("page");
    switch (page_name) {
        case "index":

            var $roll = new $MouseWheel_Roll();
            $roll.init({
                box: $(".box"),
                scrollWrapper: $(".banner"),
                scrollWrapper_child: $(".banner li")
                    // arrowUp: 上箭头对象。 无默认值
                    // arrowDown: 下箭头对象。 无默认值
                    // duration: 滚屏速度(ms)，默认500
            });

            $("li").on("click", function() {
                if ($roll.Paused) {

                    $roll.reStart.apply($roll);
                    $("li").css("background", "#fff");

                } else {

                    $roll.Pause.apply($roll);
                    $("li").css("background", "#f5f5f5");
                }
            });
            
            break;
    }
});
