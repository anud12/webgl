import {createProgramWithShadersAnd} from "./createProgram";
import {compileShader} from "./compileShader";
import {convertCoordinatesToRelative} from "./convertCoordinatesToRelative";
import {convertCoordinatesToGL} from "./comvertCoordinatesToGL";

export default async () => {
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

    let a_Position = gl.getAttribLocation(program, "a_Position");

    gl.vertexAttrib3f(a_Position, 0.0, 0.0, 0.0);

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.POINTS, 0, 1);

    const points = [];
    canvas.addEventListener("mousemove", (event: MouseEvent) => {
        const x = event.clientX;
        const y = event.clientY;
        const rectangle = (event.target as HTMLCanvasElement).getBoundingClientRect();

        const relative = convertCoordinatesToRelative({x, y}, rectangle);
        const glPoint = convertCoordinatesToGL(relative, rectangle);
        points.push(glPoint);

        gl.clear(gl.COLOR_BUFFER_BIT);
        points.forEach(value => {
            gl.vertexAttrib3f(a_Position, value.x, value.y, 0.0);
            gl.drawArrays(gl.POINTS, 0, 1)

        })
    })
}