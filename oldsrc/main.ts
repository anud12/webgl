import {compileShaders} from "./compileShaders";
import {bindVertices} from "./bindVertices";
import {createProgram} from "./createProgram";
import {canvasService} from "./gl";


const gl = canvasService.gl;
const canvas = canvasService.canvas;
gl.clearColor(0, 0, 0, 1);
gl.clear(gl.COLOR_BUFFER_BIT);

const vertices = [
    0.5,
    0.5,
    0.1,
    -0.5,
    0.5,
    -0.5
];
const vertex_buffer = bindVertices(vertices);
const {vertShader, fragShader} = compileShaders();
const shaderProgram = createProgram([vertShader, fragShader]);

gl.linkProgram(shaderProgram);
gl.useProgram(shaderProgram);

/* Step 4: Associate the shader programs to buffer objects */

//Bind vertex buffer object
gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

//Get the attribute location
var coord = gl.getAttribLocation(shaderProgram, "coordinates");

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