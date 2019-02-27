System.register(["./createProgram", "./compileShader"], function (exports_1, context_1) {
    "use strict";
    var createProgram_1, compileShader_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (createProgram_1_1) {
                createProgram_1 = createProgram_1_1;
            },
            function (compileShader_1_1) {
                compileShader_1 = compileShader_1_1;
            }
        ],
        execute: function () {
            exports_1("default", async () => {
                let VERTEX_SHADER_SOURCE = `
    attribute vec4 a_Position;
    void main() {
        gl_Position = a_Position;
        gl_PointSize = 10.0;
    }
    `;
                let FRAGMENT_SHADER_SOURCE = `
    void main() {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
    `;
                let canvas = document.getElementById("canvas");
                let gl = canvas.getContext("webgl");
                const program = createProgram_1.createProgramWithShadersAnd(gl, compileShader_1.compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER_SOURCE), compileShader_1.compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER_SOURCE))
                    .linkAndUseProgram();
                let a_Position = gl.getAttribLocation(program, "a_Position");
                gl.vertexAttrib3f(a_Position, 0.0, 0.0, 0.0);
                gl.clearColor(0.0, 0.0, 0.0, 1.0);
                gl.clear(gl.COLOR_BUFFER_BIT);
                gl.drawArrays(gl.POINTS, 0, 1);
            });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7aUNBR2UsS0FBSyxJQUFJLEVBQUU7Z0JBQ3RCLElBQUksb0JBQW9CLEdBQUc7Ozs7OztLQU0xQixDQUFDO2dCQUNGLElBQUksc0JBQXNCLEdBQUc7Ozs7S0FJNUIsQ0FBQztnQkFDRixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBc0IsQ0FBQztnQkFDcEUsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDcEMsTUFBTSxPQUFPLEdBQUcsMkNBQTJCLENBQUMsRUFBRSxFQUNGLDZCQUFhLENBQUMsRUFBRSxFQUNGLEVBQUUsQ0FBQyxhQUFhLEVBQ2hCLG9CQUFvQixDQUFDLEVBQ25DLDZCQUFhLENBQUMsRUFBRSxFQUNGLEVBQUUsQ0FBQyxlQUFlLEVBQ2xCLHNCQUFzQixDQUFDLENBQUM7cUJBQzdFLGlCQUFpQixFQUFFLENBQUM7Z0JBRXpCLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7Z0JBRTdELEVBQUUsQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBRTdDLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ2xDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQzlCLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkMsQ0FBQztRQUFBLENBQUMifQ==