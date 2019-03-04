System.register(["./createProgram", "./compileShader", "./convertCoordinatesToRelative", "./comvertCoordinatesToGL"], function (exports_1, context_1) {
    "use strict";
    var createProgram_1, compileShader_1, convertCoordinatesToRelative_1, comvertCoordinatesToGL_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (createProgram_1_1) {
                createProgram_1 = createProgram_1_1;
            },
            function (compileShader_1_1) {
                compileShader_1 = compileShader_1_1;
            },
            function (convertCoordinatesToRelative_1_1) {
                convertCoordinatesToRelative_1 = convertCoordinatesToRelative_1_1;
            },
            function (comvertCoordinatesToGL_1_1) {
                comvertCoordinatesToGL_1 = comvertCoordinatesToGL_1_1;
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
                const points = [];
                canvas.addEventListener("mousemove", (event) => {
                    const x = event.clientX;
                    const y = event.clientY;
                    const rectangle = event.target.getBoundingClientRect();
                    const relative = convertCoordinatesToRelative_1.convertCoordinatesToRelative({ x, y }, rectangle);
                    const glPoint = comvertCoordinatesToGL_1.convertCoordinatesToGL(relative, rectangle);
                    points.push(glPoint);
                    gl.clear(gl.COLOR_BUFFER_BIT);
                    points.forEach(value => {
                        gl.vertexAttrib3f(a_Position, value.x, value.y, 0.0);
                        gl.drawArrays(gl.POINTS, 0, 1);
                    });
                });
            });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBS2UsS0FBSyxJQUFJLEVBQUU7Z0JBQ3RCLElBQUksb0JBQW9CLEdBQUc7Ozs7OztLQU0xQixDQUFDO2dCQUNGLElBQUksc0JBQXNCLEdBQUc7Ozs7S0FJNUIsQ0FBQztnQkFDRixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBc0IsQ0FBQztnQkFDcEUsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDcEMsTUFBTSxPQUFPLEdBQUcsMkNBQTJCLENBQUMsRUFBRSxFQUMxQyw2QkFBYSxDQUFDLEVBQUUsRUFDWixFQUFFLENBQUMsYUFBYSxFQUNoQixvQkFBb0IsQ0FBQyxFQUN6Qiw2QkFBYSxDQUFDLEVBQUUsRUFDWixFQUFFLENBQUMsZUFBZSxFQUNsQixzQkFBc0IsQ0FBQyxDQUFDO3FCQUMzQixpQkFBaUIsRUFBRSxDQUFDO2dCQUV6QixJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO2dCQUU3RCxFQUFFLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUU3QyxFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUM5QixFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUUvQixNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBQ2xCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFpQixFQUFFLEVBQUU7b0JBQ3ZELE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7b0JBQ3hCLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7b0JBQ3hCLE1BQU0sU0FBUyxHQUFJLEtBQUssQ0FBQyxNQUE0QixDQUFDLHFCQUFxQixFQUFFLENBQUM7b0JBRTlFLE1BQU0sUUFBUSxHQUFHLDJEQUE0QixDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUNqRSxNQUFNLE9BQU8sR0FBRywrQ0FBc0IsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQzVELE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBRXJCLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUM7b0JBQzlCLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQ25CLEVBQUUsQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQzt3QkFDckQsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtvQkFFbEMsQ0FBQyxDQUFDLENBQUE7Z0JBQ04sQ0FBQyxDQUFDLENBQUE7WUFDTixDQUFDO1FBQUEsQ0FBQyJ9