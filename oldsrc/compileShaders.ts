import {canvasService} from "./gl";

const gl = canvasService.gl;
export const compileShaders = () => {
    const vertCode = `
    attribute vec2 coordinates;
    void main(void) {
        gl_Position = vec4(coordinates, 0.0, 1.0);
    }`
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
    }
}