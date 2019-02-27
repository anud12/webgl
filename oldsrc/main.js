System.register(["./compileShaders", "./bindVertices", "./createProgram", "./gl"], function (exports_1, context_1) {
    "use strict";
    var compileShaders_1, bindVertices_1, createProgram_1, gl_1, gl, canvas, vertices, vertex_buffer, _a, vertShader, fragShader, shaderProgram, coord;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (compileShaders_1_1) {
                compileShaders_1 = compileShaders_1_1;
            },
            function (bindVertices_1_1) {
                bindVertices_1 = bindVertices_1_1;
            },
            function (createProgram_1_1) {
                createProgram_1 = createProgram_1_1;
            },
            function (gl_1_1) {
                gl_1 = gl_1_1;
            }
        ],
        execute: function () {
            gl = gl_1.canvasService.gl;
            canvas = gl_1.canvasService.canvas;
            gl.clearColor(0, 0, 0, 1);
            gl.clear(gl.COLOR_BUFFER_BIT);
            vertices = [
                0.5,
                0.5,
                0.1,
                -0.5,
                0.5,
                -0.5
            ];
            vertex_buffer = bindVertices_1.bindVertices(vertices);
            _a = compileShaders_1.compileShaders(), vertShader = _a.vertShader, fragShader = _a.fragShader;
            shaderProgram = createProgram_1.createProgram([vertShader, fragShader]);
            gl.linkProgram(shaderProgram);
            gl.useProgram(shaderProgram);
            /* Step 4: Associate the shader programs to buffer objects */
            //Bind vertex buffer object
            gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
            //Get the attribute location
            coord = gl.getAttribLocation(shaderProgram, "coordinates");
            //point an attribute to the currently bound VBO
            gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 0, 0);
            //Enable the attribute
            gl.enableVertexAttribArray(coord);
            /* Step5: Drawing the required object (triangle) */
            // Clear the canvas
            gl.clearColor(0, 0, 0, 1);
            // Enable the depth test
            gl.enable(gl.DEPTH_TEST);
            // Clear the color buffer bit
            gl.clear(gl.COLOR_BUFFER_BIT);
            // Set the view port
            gl.viewport(0, 0, canvas.width, canvas.height);
            // Draw the triangle
            gl.drawArrays(gl.TRIANGLES, 0, 3);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNTSxFQUFFLEdBQUcsa0JBQWEsQ0FBQyxFQUFFLENBQUM7WUFDdEIsTUFBTSxHQUFHLGtCQUFhLENBQUMsTUFBTSxDQUFDO1lBQ3BDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDMUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUV4QixRQUFRLEdBQUc7Z0JBQ2IsR0FBRztnQkFDSCxHQUFHO2dCQUNILEdBQUc7Z0JBQ0gsQ0FBQyxHQUFHO2dCQUNKLEdBQUc7Z0JBQ0gsQ0FBQyxHQUFHO2FBQ1AsQ0FBQztZQUNJLGFBQWEsR0FBRywyQkFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZDLHNDQUEyQyxFQUExQywwQkFBVSxFQUFFLDBCQUFVLENBQXFCO1lBQzVDLGFBQWEsR0FBRyw2QkFBYSxDQUFDLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFFOUQsRUFBRSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM5QixFQUFFLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBRTdCLDZEQUE2RDtZQUU3RCwyQkFBMkI7WUFDM0IsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBRTlDLDRCQUE0QjtZQUN4QixLQUFLLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUUvRCwrQ0FBK0M7WUFDL0MsRUFBRSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRXhELHNCQUFzQjtZQUN0QixFQUFFLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFbEMsbURBQW1EO1lBRW5ELG1CQUFtQjtZQUNuQixFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRTFCLHdCQUF3QjtZQUN4QixFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUV6Qiw2QkFBNkI7WUFDN0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUU5QixvQkFBb0I7WUFDcEIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRS9DLG9CQUFvQjtZQUNwQixFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQUEsQ0FBQyJ9