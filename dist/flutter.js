"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Row = exports.Column = exports.CrossAxisAligmentE = exports.MainAxisAligmentE = exports.Container = exports.Scaffold = exports.SeoTagContainerE = exports.BorderRadiusE = exports.TypeImgE = exports.LanguageE = void 0;
const fs_1 = __importDefault(require("fs"));
const html_minifier_1 = require("html-minifier");
const pretty_1 = __importDefault(require("pretty"));
const uuid_1 = require("uuid");
var LanguageE;
(function (LanguageE) {
    LanguageE["ES"] = "es";
    LanguageE["EN"] = "en";
})(LanguageE = exports.LanguageE || (exports.LanguageE = {}));
var TypeImgE;
(function (TypeImgE) {
    TypeImgE["ICO"] = "image/x-icon";
    TypeImgE["PNG"] = "image/png";
})(TypeImgE = exports.TypeImgE || (exports.TypeImgE = {}));
var BorderRadiusE;
(function (BorderRadiusE) {
    BorderRadiusE["VW"] = "vw";
    BorderRadiusE["Porcent"] = "%";
})(BorderRadiusE = exports.BorderRadiusE || (exports.BorderRadiusE = {}));
var SeoTagContainerE;
(function (SeoTagContainerE) {
    SeoTagContainerE["HEADER"] = "header";
    SeoTagContainerE["FOOTER"] = "footer";
    SeoTagContainerE["ASIDE"] = "aside";
    SeoTagContainerE["MAIN"] = "main";
    SeoTagContainerE["DIV"] = "div";
})(SeoTagContainerE = exports.SeoTagContainerE || (exports.SeoTagContainerE = {}));
const Scaffold = ({ extension = 'html', filename = 'FirstApp', path = './views', productionMode = false, header = {
    languaje: LanguageE.EN,
    description: 'Demo',
    keywords: 'Demo',
    title: 'First App',
    favicon: {
        path: '',
        type: TypeImgE.ICO
    },
    ogp: {
        title: '',
        image: '',
        type: '',
        url: ''
    }
}, body }) => {
    var _a, _b, _c, _d, _e, _f;
    let page = `<!DOCTYPE html> 
<html lang='${header.languaje}'>
<head>
    <meta charset='UTF-8'/>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'/>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'/>

    <meta name='description' content='${header.description}'/>
    <meta name='keywords' content='${header.keywords}' />

    <meta property='og:title' content='${(_a = header.ogp) === null || _a === void 0 ? void 0 : _a.title}' />
    <meta property='og:type'  content='${(_b = header.ogp) === null || _b === void 0 ? void 0 : _b.type}' />
    <meta property='og:url'   content='${(_c = header.ogp) === null || _c === void 0 ? void 0 : _c.url}' />
    <meta property='og:image' content='${(_d = header.ogp) === null || _d === void 0 ? void 0 : _d.image}' />

    <link rel='shortcut icon' href='${(_e = header.favicon) === null || _e === void 0 ? void 0 : _e.path}' type='${(_f = header.favicon) === null || _f === void 0 ? void 0 : _f.type}'>

    <title>${header.title}</title>
</head>
<body>
    <scaffold>${body}
    </scaffold>
</body>
</html>
`;
    if (productionMode) {
        page = html_minifier_1.minify(page, {
            collapseInlineTagWhitespace: true,
            html5: true,
            collapseWhitespace: true,
        });
    }
    else {
        page = pretty_1.default(page, { ocd: true });
    }
    fs_1.default.writeFile(
    /* Path de la vista */ `${path}/${filename}.${extension}`, 
    /* Contenido html */ page, (error) => { });
};
exports.Scaffold = Scaffold;
const Container = ({ height, width, seoTag = SeoTagContainerE.DIV, stateClass = {
    hover: {
        background: undefined,
        borderRadius: undefined
    },
    normal: {
        background: undefined,
        borderRadius: undefined
    },
}, child = '' }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    let id = 'class-' + uuid_1.v4();
    return `
    <${seoTag} 
      class='${id}'
  >
  <style>
      .${id} {
        display: inline-block;
        ${height === undefined ? `` : `height: ${height}vw;`}
        ${width === undefined ? `` : `width: ${width}%;`}
        background: red;
        ${((_a = stateClass.normal) === null || _a === void 0 ? void 0 : _a.borderRadius) === undefined ? `` : `
          border-radius: ${(_b = stateClass.normal) === null || _b === void 0 ? void 0 : _b.borderRadius.value}${(_c = stateClass.normal) === null || _c === void 0 ? void 0 : _c.borderRadius.type} 
          `}
        ${((_d = stateClass.normal) === null || _d === void 0 ? void 0 : _d.background) === undefined ? `` : `
          background: rgba(
            ${(_e = stateClass.normal) === null || _e === void 0 ? void 0 : _e.background.r},  
            ${(_f = stateClass.normal) === null || _f === void 0 ? void 0 : _f.background.g}, 
            ${(_g = stateClass.normal) === null || _g === void 0 ? void 0 : _g.background.b},
            ${(_h = stateClass.normal) === null || _h === void 0 ? void 0 : _h.background.a});  
            `}

      }
      .${id}:hover{
        display: inline-block;
        ${((_j = stateClass.hover) === null || _j === void 0 ? void 0 : _j.background) === undefined ? `` : `
          background: rgba(
            ${(_k = stateClass.hover) === null || _k === void 0 ? void 0 : _k.background.r},  
            ${(_l = stateClass.hover) === null || _l === void 0 ? void 0 : _l.background.g}, 
            ${(_m = stateClass.hover) === null || _m === void 0 ? void 0 : _m.background.b},
            ${(_o = stateClass.hover) === null || _o === void 0 ? void 0 : _o.background.a}); 
            `}
      }
  </style>
      ${child}
    </${seoTag}>`;
};
exports.Container = Container;
var MainAxisAligmentE;
(function (MainAxisAligmentE) {
    MainAxisAligmentE["End"] = "flex-end";
    MainAxisAligmentE["Center"] = "center";
    MainAxisAligmentE["Start"] = "flex-start";
    MainAxisAligmentE["SpaceAround"] = "space-around";
    MainAxisAligmentE["SpaceBetween"] = "space-between";
    MainAxisAligmentE["SpaceEvenly"] = "space-evenly";
})(MainAxisAligmentE = exports.MainAxisAligmentE || (exports.MainAxisAligmentE = {}));
var CrossAxisAligmentE;
(function (CrossAxisAligmentE) {
    CrossAxisAligmentE["End"] = "end";
    CrossAxisAligmentE["Start"] = "Start";
    CrossAxisAligmentE["Center"] = "center";
})(CrossAxisAligmentE = exports.CrossAxisAligmentE || (exports.CrossAxisAligmentE = {}));
const Column = ({ mainAxisAligment = MainAxisAligmentE.Start, crossAxisAligment = CrossAxisAligmentE.Start, children }) => {
    return `
    <div style="
        display: flex;
        flex-direction: column;
        justify-content: ${mainAxisAligment};
        align-items: ${crossAxisAligment};
      ">
      ${children.toString().replace(/,/g, '')}
    </div>
  
  `;
};
exports.Column = Column;
const Row = ({ mainAxisAligment = MainAxisAligmentE.Start, crossAxisAligment = CrossAxisAligmentE.Start, children }) => {
    return `
    <div style="
        display: flex;
        flex-direction: row;
        justify-content: ${mainAxisAligment};
        align-items: ${crossAxisAligment};
      ">
      ${children.toString().replace(/,/g, '')}
    </div>
  
  `;
};
exports.Row = Row;
