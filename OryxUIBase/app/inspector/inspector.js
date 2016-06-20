System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Inspector;
    return {
        setters:[],
        execute: function() {
            Inspector = (function () {
                function Inspector(id, code, name, current) {
                    this.id = id;
                    this.code = code;
                    this.name = name;
                    this.current = current;
                }
                return Inspector;
            }());
            exports_1("Inspector", Inspector);
        }
    }
});
//# sourceMappingURL=inspector.js.map