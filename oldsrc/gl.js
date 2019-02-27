System.register([], function (exports_1, context_1) {
    "use strict";
    var CanvasService, canvasService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            CanvasService = class CanvasService {
                constructor() {
                    this.canvas = document.getElementById("mycanvas");
                    this.gl = this.canvas.getContext('webgl');
                }
            };
            exports_1("CanvasService", CanvasService);
            exports_1("canvasService", canvasService = new CanvasService());
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBQUEsZ0JBQUEsTUFBYSxhQUFhO2dCQUl0QjtvQkFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFzQixDQUFDO29CQUN2RSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM5QyxDQUFDO2FBQ0osQ0FBQTs7WUFFRCwyQkFBYSxhQUFhLEdBQUcsSUFBSSxhQUFhLEVBQUUsRUFBQztRQUFBLENBQUMifQ==