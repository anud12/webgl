System.register(["./gl"], function (exports_1, context_1) {
    "use strict";
    var gl_1, gl, bindVertices;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (gl_1_1) {
                gl_1 = gl_1_1;
            }
        ],
        execute: function () {
            gl = gl_1.canvasService.gl;
            exports_1("bindVertices", bindVertices = (vertices) => {
                const vertex_buffer = gl.createBuffer();
                gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
                gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
                gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
                gl.bindBuffer(gl.ARRAY_BUFFER, null);
                return vertex_buffer;
            });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluZFZlcnRpY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmluZFZlcnRpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1lBRU0sRUFBRSxHQUFHLGtCQUFhLENBQUMsRUFBRSxDQUFDO1lBRTVCLDBCQUFhLFlBQVksR0FBRyxDQUFDLFFBQXVCLEVBQUUsRUFBRTtnQkFDcEQsTUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUN4QyxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDLENBQUM7Z0JBQzlDLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxJQUFJLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBRTNFLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUMsQ0FBQztnQkFDOUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNyQyxPQUFPLGFBQWEsQ0FBQztZQUN6QixDQUFDLEVBQUE7UUFBQSxDQUFDIn0=