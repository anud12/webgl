import {createProgramWithShadersAnd} from "../draw_a_point/createProgram";
import {compileShader} from "../draw_a_point/compileShader";

export default () => {
    let VERTEX_SHADER_SOURCE = `
    attribute vec4 a_Position;
    void main() {
        gl_Position = a_Position;
    }
    `;
    let FRAGMENT_SHADER_SOURCE = `
    void main() {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
    `;

    let canvas = document.getElementById("canvas") as HTMLCanvasElement;
    let gl = canvas.getContext("webgl");
    const program = createProgramWithShadersAnd(gl,
        compileShader(gl,
            gl.VERTEX_SHADER,
            VERTEX_SHADER_SOURCE),
        compileShader(gl,
            gl.FRAGMENT_SHADER,
            FRAGMENT_SHADER_SOURCE))
        .linkAndUseProgram();

    var vertexArray = new Float32Array([
        -0.5, 0.5,
        0.5, 0.5,
        -0.5, -0.5,
        0.5, -0.5,
        0, -1
    ])
    var n = vertexArray.length / 2;

    gl.bindBuffer(gl.ARRAY_BUFFER,
        gl.createBuffer()
    );
    gl.bufferData(gl.ARRAY_BUFFER,
        vertexArray,
        gl.STATIC_DRAW);
    const a_Position = gl.getAttribLocation(program, 'a_Position');
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(a_Position);


    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, n)
}