System.register([], function (exports_1, context_1) {
    "use strict";
    var compileShader;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("compileShader", compileShader = (gl, shaderType, code) => {
                var shader = gl.createShader(shaderType);
                gl.shaderSource(shader, code);
                gl.compileShader(shader);
                return shader;
            });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZVNoYWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbXBpbGVTaGFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUFBLDJCQUFhLGFBQWEsR0FBRyxDQUFDLEVBQXlCLEVBQ3pCLFVBQWUsRUFDZixJQUFZLEVBQUUsRUFBRTtnQkFDMUMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDekMsRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzlCLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3pCLE9BQU8sTUFBTSxDQUFDO1lBQ2xCLENBQUMsRUFBQztRQUVGLENBQUMifQ==