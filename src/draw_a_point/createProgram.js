System.register([], function (exports_1, context_1) {
    "use strict";
    var createProgramWithShadersAnd;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("createProgramWithShadersAnd", createProgramWithShadersAnd = (gl, ...shaderList) => {
                const shaderProgram = gl.createProgram();
                shaderList.forEach(shader => {
                    gl.attachShader(shaderProgram, shader);
                });
                return {
                    getResult: () => {
                        return shaderProgram;
                    },
                    linkAndUseProgram: () => {
                        gl.linkProgram(shaderProgram);
                        gl.useProgram(shaderProgram);
                        return shaderProgram;
                    }
                };
            });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUHJvZ3JhbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZVByb2dyYW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUFBLHlDQUFhLDJCQUEyQixHQUFHLENBQUMsRUFBeUIsRUFDekIsR0FBRyxVQUF5QixFQUFFLEVBQUU7Z0JBQ3hFLE1BQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDekMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDeEIsRUFBRSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUE7Z0JBQzFDLENBQUMsQ0FBQyxDQUFDO2dCQUNILE9BQU87b0JBQ0gsU0FBUyxFQUFFLEdBQUcsRUFBRTt3QkFDWixPQUFPLGFBQWEsQ0FBQztvQkFDekIsQ0FBQztvQkFDRCxpQkFBaUIsRUFBRSxHQUFHLEVBQUU7d0JBQ3BCLEVBQUUsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7d0JBQzlCLEVBQUUsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7d0JBQzdCLE9BQU8sYUFBYSxDQUFDO29CQUN6QixDQUFDO2lCQUNKLENBQUM7WUFDTixDQUFDLEVBQUM7UUFBQSxDQUFDIn0=