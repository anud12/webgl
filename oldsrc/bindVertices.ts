import {canvasService} from "./gl";

const gl = canvasService.gl;

export const bindVertices = (vertices: Array<number>) => {
    const vertex_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    return vertex_buffer;
}