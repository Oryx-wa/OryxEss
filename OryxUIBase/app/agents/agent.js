System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Agent;
    return {
        setters:[],
        execute: function() {
            Agent = (function () {
                function Agent(id, code, name, current) {
                    this.id = id;
                    this.code = code;
                    this.name = name;
                    this.current = current;
                }
                return Agent;
            }());
            exports_1("Agent", Agent);
        }
    }
});
//# sourceMappingURL=agent.js.map