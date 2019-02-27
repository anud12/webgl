System.register(["./gl"], function (exports_1, context_1) {
    "use strict";
    var gl_1, gl, compileShaders;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (gl_1_1) {
                gl_1 = gl_1_1;
            }
        ],
        execute: function () {
            gl = gl_1.canvasService.gl;
            exports_1("compileShaders", compileShaders = () => {
                const vertCode = `
    attribute vec2 coordinates;
    void main(void) {
        gl_Position = vec4(coordinates, 0.0, 1.0);
    }`;
                const vertShader = gl.createShader(gl.VERTEX_SHADER);
                gl.shaderSource(vertShader, vertCode);
                gl.compileShader(vertShader);
                const fragCode = `
    void main (void) {
        gl_FragColor = vec4(255, 255, 255, 1);
    }
    `;
                const fragShader = gl.createShader(gl.FRAGMENT_SHADER);
                gl.shaderSource(fragShader, fragCode);
                gl.compileShader(fragShader);
                return {
                    vertShader,
                    fragShader
                };
            });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZVNoYWRlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21waWxlU2hhZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztZQUVNLEVBQUUsR0FBRyxrQkFBYSxDQUFDLEVBQUUsQ0FBQztZQUM1Qiw0QkFBYSxjQUFjLEdBQUcsR0FBRyxFQUFFO2dCQUMvQixNQUFNLFFBQVEsR0FBRzs7OztNQUlmLENBQUE7Z0JBQ0YsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3JELEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUN0QyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUU3QixNQUFNLFFBQVEsR0FBRzs7OztLQUloQixDQUFDO2dCQUVGLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUN2RCxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDdEMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDN0IsT0FBTztvQkFDSCxVQUFVO29CQUNWLFVBQVU7aUJBQ2IsQ0FBQTtZQUNMLENBQUMsRUFBQTtRQUFBLENBQUMifQ==