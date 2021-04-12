import fs from 'fs'
import { minify } from "html-minifier";
import pretty from "pretty";
import { v4 as uid } from "uuid";


export enum LanguageE {
  ES = "es",
  EN = "en",
}

export enum TypeImgE {
  ICO = "image/x-icon",
  PNG = "image/png",
}

export enum BorderRadiusE {
  VW = 'vw',
  Porcent = '%'
}

export enum SeoTagContainerE {
  HEADER = "header",
  FOOTER = "footer",
  ASIDE = "aside",
  MAIN = "main",
  DIV = "div"
}

interface FaviconI {
  path?: string;
  type?: TypeImgE;
}

interface TheOpenGraphProtocolI {
  title?: string;
  type?: string;
  url?: string;
  image?: string;
}

interface HeaderI {
  languaje?: LanguageE;
  description?: string;
  keywords?: string;
  title?: string;
  favicon?: FaviconI
  ogp?: TheOpenGraphProtocolI
}


interface ScaffoldI {
  extension?: string;
  filename?: string;
  productionMode?: boolean;
  path?: string;
  header?: HeaderI;
  body: string;
}

export const Scaffold = ({
  extension = 'html',
  filename = 'FirstApp',
  path = './views',
  productionMode = false,
  header = {
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
  },
  body


}: ScaffoldI) => {

  let page = `<!DOCTYPE html> 
<html lang='${header.languaje}'>
<head>
    <meta charset='UTF-8'/>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'/>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'/>

    <meta name='description' content='${header.description}'/>
    <meta name='keywords' content='${header.keywords}' />

    <meta property='og:title' content='${header.ogp?.title}' />
    <meta property='og:type'  content='${header.ogp?.type}' />
    <meta property='og:url'   content='${header.ogp?.url}' />
    <meta property='og:image' content='${header.ogp?.image}' />

    <link rel='shortcut icon' href='${header.favicon?.path}' type='${header.favicon?.type}'>

    <title>${header.title}</title>
</head>
<body>
    <scaffold>${body}
    </scaffold>
</body>
</html>
`;

  if (productionMode) {
    page = minify(page, {
      collapseInlineTagWhitespace: true,
      html5: true,
      collapseWhitespace: true,

    })
  } else {
    page = pretty(page, { ocd: true })
  }

  fs.writeFile(
  /* Path de la vista */ `${path}/${filename}.${extension}`,
  /* Contenido html */ page,
    (error: any) => { /* handle error */ }
  );

};

interface ColorRGBAI {
  r: number;
  g: number;
  b: number;
  a: number;
}

interface BorderRadiusI {
  type?: BorderRadiusE;
  value?: number;
}

interface StyleI {
  background?: ColorRGBAI;
  borderRadius?: BorderRadiusI;
}

interface StateClassI {
  normal?: StyleI;
  hover?: StyleI;
}

interface ContainerI {
  height?: number;
  width?: number;
  seoTag?: SeoTagContainerE;
  stateClass?: StateClassI;
  child?: string
}

export const Container = ({
  height,
  width,
  seoTag = SeoTagContainerE.DIV,
  stateClass = {  
    hover: {
      background: undefined,
      borderRadius: undefined
    },
    normal: {
      background: undefined,
      borderRadius: undefined
    },  
  },
  child = ''
}: ContainerI): string => {
  let id: string = 'class-' + uid()
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
        ${stateClass.normal?.borderRadius === undefined ? `` : `
          border-radius: ${stateClass.normal?.borderRadius.value}${stateClass.normal?.borderRadius.type} 
          `
        }
        ${stateClass.normal?.background === undefined ? `` : `
          background: rgba(
            ${stateClass.normal?.background.r},  
            ${stateClass.normal?.background.g}, 
            ${stateClass.normal?.background.b},
            ${stateClass.normal?.background.a});  
            `
        }

      }
      .${id}:hover{
        display: inline-block;
        ${stateClass.hover?.background === undefined ? `` : `
          background: rgba(
            ${stateClass.hover?.background.r},  
            ${stateClass.hover?.background.g}, 
            ${stateClass.hover?.background.b},
            ${stateClass.hover?.background.a}); 
            `
        }
      }
  </style>
      ${child}
    </${seoTag}>`;

};

export enum MainAxisAligmentE {
  End = 'flex-end',
  Center = 'center',
  Start = 'flex-start',
  SpaceAround = 'space-around',
  SpaceBetween = 'space-between',
  SpaceEvenly = 'space-evenly',
}

export enum CrossAxisAligmentE {
  End = 'end',
  Start = 'Start',
  Center = 'center'
}

interface ColumnI {
  mainAxisAligment?: MainAxisAligmentE;
  crossAxisAligment?: CrossAxisAligmentE;
  children: Array<string>;
}

export const Column = ({
  mainAxisAligment = MainAxisAligmentE.Start,
  crossAxisAligment = CrossAxisAligmentE.Start,
  children
}: ColumnI) => {

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

}

interface RowI {
  mainAxisAligment?: MainAxisAligmentE;
  crossAxisAligment?: CrossAxisAligmentE;
  children: Array<string>;
}

export const Row = ({
  mainAxisAligment = MainAxisAligmentE.Start,
  crossAxisAligment = CrossAxisAligmentE.Start,
  children
}: RowI) => {


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

}
