import {createProgramWithShadersAnd} from "../draw_a_point/createProgram";
import {compileShader} from "../draw_a_point/compileShader";
import {convertCoordinatesToRelative} from "../draw_a_point/convertCoordinatesToRelative";
import {convertCoordinatesToGL} from "../draw_a_point/comvertCoordinatesToGL";

export default () => {
    let VERTEX_SHADER_SOURCE = `
    attribute vec4 a_Position;
    void main() {
        gl_Position = a_Position;
        gl_PointSize = 10.0;
    }
    `;
    let FRAGMENT_SHADER_SOURCE = `
    precision mediump float;
    uniform vec4 u_FragColor;
    void main() {
        gl_FragColor = u_FragColor;
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
    let u_FragColor = gl.getUniformLocation(program, "u_FragColor");
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    const points = [];
    canvas.addEventListener("mousemove", (event: MouseEvent) => {
        const x = event.clientX;
        const y = event.clientY;
        const rectangle = (event.target as HTMLCanvasElement).getBoundingClientRect();

        const relative = convertCoordinatesToRelative({x, y}, rectangle);
        const glPoint = convertCoordinatesToGL(relative, rectangle) as any;
        if (glPoint.x >= 0.0 && glPoint.y >= 0.0) {
            glPoint.color = [1.0, 0.0, 0.0, 1.0];
        }
        else if (glPoint.x < 0.0 && glPoint.y < 0.0) {
            glPoint.color = [0.0, 1.0, 0.0, 1.0];
        } else {
            glPoint.color = [1.0, 1.0, 1.0, 1.0];
        }
        points.push(glPoint);
        gl.clear(gl.COLOR_BUFFER_BIT);
        points.forEach((value) => {
            gl.vertexAttrib3f(a_Position,
                value.x,
                value.y,
                0.0
            );
            gl.uniform4f(u_FragColor,
                value.color[0],
                value.color[1],
                value.color[2],
                value.color[3]
            );
            gl.drawArrays(gl.POINTS, 0, 1)

        })
    })
};