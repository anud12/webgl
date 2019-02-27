System.register([], function (exports_1, context_1) {
    "use strict";
    var request, readFile;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            request = (path) => {
                const request = new XMLHttpRequest();
                request.open('GET', path, false);
                request.send(null);
                return request.responseText;
            };
            exports_1("readFile", readFile = (path) => {
                return request(path);
            });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZEZpbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWFkRmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBQUksT0FBTyxHQUFHLENBQUMsSUFBWSxFQUFFLEVBQUU7Z0JBQzNCLE1BQU0sT0FBTyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7Z0JBQ3JDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDakMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkIsT0FBTyxPQUFPLENBQUMsWUFBc0IsQ0FBQztZQUMxQyxDQUFDLENBQUE7WUFDRCxzQkFBYSxRQUFRLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRTtnQkFDckMsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsQ0FBQyxFQUFDO1FBQUEsQ0FBQyJ9