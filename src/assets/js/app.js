
$(document).foundation();


$("#zoom").elevateZoom({
  zoomType: "inner",
  cursor: "crosshair"
});

//var example1; //globals so we can manipulate them in the debugger
        $(function() {
            "use strict";
            var example = $("svg").svgPanZoom();
            
            var callback = function(example) {
                return function(event) {
                    if ($(event.target).hasClass("fa-arrow-up"))
                        example.panUp()
                    if ($(event.target).hasClass("fa-arrow-down"))
                        example.panDown()
                    if ($(event.target).hasClass("fa-arrow-left"))
                        example.panLeft()
                    if ($(event.target).hasClass("fa-arrow-right"))
                        example.panRight()
                    if ($(event.target).hasClass("fa-plus"))
                        example.zoomIn()
                    if ($(event.target).hasClass("fa-minus"))
                        example.zoomOut()
                    if ($(event.target).hasClass("fa-refresh"))
                        example.reset()
                }
            };
 
            $("div#example1 a").click(callback(example));
           // $("#example1 a").on("click", callback(example1));

        });

//svgPanZoom.panLeft(amount, animationTime)
//svgPanZoom.panRight(amount, animationTime)
//svgPanZoom.panUp(amount, animationTime)
//svgPanZoom.panDown(amount, animationTime)
//svgPanZoom.zoomIn(animationTime)
//svgPanZoom.zoomOut(animationTime)
//svgPanZoom.reset()