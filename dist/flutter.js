"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Column = exports.Aligment = exports.Container = exports.Scaffold = exports.SeoTag = exports.BorderRadius = exports.TypeImg = exports.Language = void 0;
var Language;
(function (Language) {
    Language["ES"] = "es";
    Language["EN"] = "en";
})(Language = exports.Language || (exports.Language = {}));
var TypeImg;
(function (TypeImg) {
    TypeImg["ICO"] = "image/x-icon";
    TypeImg["PNG"] = "image/png";
})(TypeImg = exports.TypeImg || (exports.TypeImg = {}));
var BorderRadius;
(function (BorderRadius) {
    BorderRadius["VW"] = "vw";
    BorderRadius["Porcent"] = "%";
})(BorderRadius = exports.BorderRadius || (exports.BorderRadius = {}));
var SeoTag;
(function (SeoTag) {
    SeoTag["HEADER"] = "header";
    SeoTag["FOOTER"] = "footer";
    SeoTag["ASIDE"] = "aside";
    SeoTag["MAIN"] = "main";
    SeoTag["DIV"] = "div";
})(SeoTag = exports.SeoTag || (exports.SeoTag = {}));
const Scaffold = (options) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    return `<!DOCTYPE html>
<html lang='${((_a = options === null || options === void 0 ? void 0 : options.header) === null || _a === void 0 ? void 0 : _a.lenguaje) || Language.ES}'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>

    <meta name='description' content='${((_b = options === null || options === void 0 ? void 0 : options.header) === null || _b === void 0 ? void 0 : _b.description) || ""}'>
    <meta name='keywords' content='${((_c = options === null || options === void 0 ? void 0 : options.header) === null || _c === void 0 ? void 0 : _c.keywords) || ""}' />

    <meta property='og:title' content='${((_e = (_d = options === null || options === void 0 ? void 0 : options.header) === null || _d === void 0 ? void 0 : _d.op) === null || _e === void 0 ? void 0 : _e.title) || ""}' />
    <meta property='og:type'  content='${((_g = (_f = options === null || options === void 0 ? void 0 : options.header) === null || _f === void 0 ? void 0 : _f.op) === null || _g === void 0 ? void 0 : _g.type) || ""}' />
    <meta property='og:url'   content='${((_j = (_h = options === null || options === void 0 ? void 0 : options.header) === null || _h === void 0 ? void 0 : _h.op) === null || _j === void 0 ? void 0 : _j.url) || ""}' />
    <meta property='og:image' content='${((_l = (_k = options === null || options === void 0 ? void 0 : options.header) === null || _k === void 0 ? void 0 : _k.op) === null || _l === void 0 ? void 0 : _l.image) || ""}' />

    <link rel='shortcut icon' href='${((_o = (_m = options === null || options === void 0 ? void 0 : options.header) === null || _m === void 0 ? void 0 : _m.favicon) === null || _o === void 0 ? void 0 : _o.path) || ""}' type='${((_q = (_p = options === null || options === void 0 ? void 0 : options.header) === null || _p === void 0 ? void 0 : _p.favicon) === null || _q === void 0 ? void 0 : _q.type) || TypeImg.ICO}'>

    <title>${((_r = options === null || options === void 0 ? void 0 : options.header) === null || _r === void 0 ? void 0 : _r.title) || ""}</title>
</head>

<body>

    <scaffold>
    
        ${options === null || options === void 0 ? void 0 : options.body}

    </scaffold>

</body>
</html>`;
};
exports.Scaffold = Scaffold;
const Container = (options) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    return `
    <${(options === null || options === void 0 ? void 0 : options.seoTag) || SeoTag.DIV} style='
            display: inline-block;
            ${(options === null || options === void 0 ? void 0 : options.height) === undefined ? `` : `height: ${options === null || options === void 0 ? void 0 : options.height}vw;`}
            ${(options === null || options === void 0 ? void 0 : options.width) === undefined ? `` : `width: ${options === null || options === void 0 ? void 0 : options.width}%;`}
            ${((_a = options === null || options === void 0 ? void 0 : options.style) === null || _a === void 0 ? void 0 : _a.background) === undefined ? `` : `
                background: rgba(
                  ${((_c = (_b = options === null || options === void 0 ? void 0 : options.style) === null || _b === void 0 ? void 0 : _b.background) === null || _c === void 0 ? void 0 : _c.r) || 0},
                  ${((_e = (_d = options === null || options === void 0 ? void 0 : options.style) === null || _d === void 0 ? void 0 : _d.background) === null || _e === void 0 ? void 0 : _e.g) || 0},
                  ${((_g = (_f = options === null || options === void 0 ? void 0 : options.style) === null || _f === void 0 ? void 0 : _f.background) === null || _g === void 0 ? void 0 : _g.b) || 0},
                  ${((_j = (_h = options === null || options === void 0 ? void 0 : options.style) === null || _h === void 0 ? void 0 : _h.background) === null || _j === void 0 ? void 0 : _j.a) || 0});
                  `}
            ${((_k = options === null || options === void 0 ? void 0 : options.style) === null || _k === void 0 ? void 0 : _k.borderRadius) === undefined ? `` : `
                border-radius: ${(_l = options === null || options === void 0 ? void 0 : options.style) === null || _l === void 0 ? void 0 : _l.borderRadius.value}${(_m = options === null || options === void 0 ? void 0 : options.style) === null || _m === void 0 ? void 0 : _m.borderRadius.type} 
              `}
            '
    >
      ${(options === null || options === void 0 ? void 0 : options.children) === undefined ? `` : `${options === null || options === void 0 ? void 0 : options.children}`}
    </${(options === null || options === void 0 ? void 0 : options.seoTag) || SeoTag.DIV}>`;
};
exports.Container = Container;
var Aligment;
(function (Aligment) {
    Aligment["End"] = "flex-end";
    Aligment["Center"] = "center";
    Aligment["Start"] = "flex-start";
    Aligment["SpaceAround"] = "space-around";
    Aligment["SpaceBetween"] = "space-between";
    Aligment["SpaceEvenly"] = "space-evenly";
})(Aligment = exports.Aligment || (exports.Aligment = {}));
const Column = ({ MainAxisAligment = Aligment.Start }) => {
};
exports.Column = Column;
