import {createProgramWithShadersAnd} from "../draw_a_point/createProgram";
import {compileShader} from "../draw_a_point/compileShader";
import {convertAngleToRadian} from "./convertAngleToRadian";

export default () => {
    let VERTEX_SHADER_SOURCE = `
    attribute vec4 a_Position;
    uniform float u_CosB, u_SinB;
    void main() {
        gl_Position.x = a_Position.x * u_CosB - a_Position.y * u_SinB;
        gl_Position.y = a_Position.x * u_SinB + a_Position.y * u_CosB;
        gl_Position.z = a_Position.z;
        gl_Position.w = a_Position.w;
    }
    `;
    let FRAGMENT_SHADER_SOURCE = `
    precision mediump float;
    uniform vec4 u_FragColor;
    void main() {
        gl_FragColor = vec4(0,0,0,0);
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
    //
    const radian = convertAngleToRadian(15);
    const u_CosB = gl.getUniformLocation(program, "u_CosB");
    gl.uniform1f(u_CosB, Math.cos(radian));
    const u_SinB = gl.getUniformLocation(program, "u_SinB");
    gl.uniform1f(u_SinB, Math.sin(radian));


    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, n)
}