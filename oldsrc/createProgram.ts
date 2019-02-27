import {canvasService} from "./gl";

const gl = canvasService.gl;
export const createProgram = (shaderList: Array<WebGLShader>) => {
    const shaderProgram = gl.createProgram();
    shaderList.forEach(shader => {
        gl.attachShader(shaderProgram, shader)
    });
    return shaderProgram;
}