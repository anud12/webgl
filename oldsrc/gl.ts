export class CanvasService {
    canvas: HTMLCanvasElement;
    gl: WebGLRenderingContext;

    constructor() {
        this.canvas = document.getElementById("mycanvas") as HTMLCanvasElement;
        this.gl = this.canvas.getContext('webgl');
    }
}

export const canvasService = new CanvasService();