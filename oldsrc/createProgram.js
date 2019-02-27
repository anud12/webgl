System.register(["./gl"], function (exports_1, context_1) {
    "use strict";
    var gl_1, gl, createProgram;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (gl_1_1) {
                gl_1 = gl_1_1;
            }
        ],
        execute: function () {
            gl = gl_1.canvasService.gl;
            exports_1("createProgram", createProgram = (shaderList) => {
                const shaderProgram = gl.createProgram();
                shaderList.forEach(shader => {
                    gl.attachShader(shaderProgram, shader);
                });
                return shaderProgram;
            });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUHJvZ3JhbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZVByb2dyYW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7WUFFTSxFQUFFLEdBQUcsa0JBQWEsQ0FBQyxFQUFFLENBQUM7WUFDNUIsMkJBQWEsYUFBYSxHQUFHLENBQUMsVUFBOEIsRUFBRSxFQUFFO2dCQUM1RCxNQUFNLGFBQWEsR0FBRyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3pDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQ3hCLEVBQUUsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFBO2dCQUMxQyxDQUFDLENBQUMsQ0FBQztnQkFDSCxPQUFPLGFBQWEsQ0FBQztZQUN6QixDQUFDLEVBQUE7UUFBQSxDQUFDIn0=