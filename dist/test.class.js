"use strict";
var Language;
(function (Language) {
    Language["ES"] = "es";
    Language["EN"] = "en";
})(Language || (Language = {}));
let main = () => {
    console.log('Hola');
};
main();
class Scaffold {
    constructor(options) {
        // console.log(options?.header?.lenguage)
        this.hola({
            header: {}
        });
    }
    hola(options) {
        var _a;
        return ((_a = options === null || options === void 0 ? void 0 : options.header) === null || _a === void 0 ? void 0 : _a.language) || 'No se mando argumentos';
    }
}
let scaffold = new Scaffold({
    header: {
        lenguage: Language.ES
    }
});
// console.log(scaffold.hola())
