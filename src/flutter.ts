export enum Language {
  ES = "es",
  EN = "en",
}

export enum TypeImg {
  ICO = "image/x-icon",
  PNG = "image/png",
}

export enum BorderRadius {
  VW = 'vw',
  Porcent = '%'
}

export enum SeoTag {
  HEADER = "header",
  FOOTER = "footer",
  ASIDE = "aside",
  MAIN = "main",
  DIV = "div"
}

export const Scaffold = (options?: {
  header?: {
    lenguaje?: Language;
    description?: string;
    keywords?: string;
    title?: string;
    favicon?: {
      path: string;
      type?: TypeImg;
    };
    op?: {
      title?: string;
      type?: string;
      url?: string;
      image?: string;
    };
  };
  body: string;
}): string => {
  return `<!DOCTYPE html>
<html lang='${options?.header?.lenguaje || Language.ES}'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>

    <meta name='description' content='${options?.header?.description || ""}'>
    <meta name='keywords' content='${options?.header?.keywords || ""}' />

    <meta property='og:title' content='${options?.header?.op?.title || ""}' />
    <meta property='og:type'  content='${options?.header?.op?.type || ""}' />
    <meta property='og:url'   content='${options?.header?.op?.url || ""}' />
    <meta property='og:image' content='${options?.header?.op?.image || ""}' />

    <link rel='shortcut icon' href='${options?.header?.favicon?.path || ""}' type='${options?.header?.favicon?.type || TypeImg.ICO}'>

    <title>${options?.header?.title || ""}</title>
</head>

<body>

    <scaffold>
    
        ${ options?.body }

    </scaffold>

</body>
</html>`;
};

export const Container = (options?: {
  height?: number,
  width?: number,
  seoTag?: SeoTag,
  style?: {
    background?: {
      r: number, 
      g: number,
      b: number,
      a: number,
    },
    borderRadius: {
      type: BorderRadius,
      value: number
    }


  },
  children?: string
}): string => {
  return `
    <${options?.seoTag || SeoTag.DIV} style='
            display: inline-block;
            ${ options?.height === undefined ? `` : `height: ${options?.height}vw;` }
            ${ options?.width  === undefined ? `` : `width: ${options?.width}%;` }
            ${
              options?.style?.background === undefined ? `` : `
                background: rgba(
                  ${options?.style?.background?.r || 0},
                  ${options?.style?.background?.g || 0},
                  ${options?.style?.background?.b || 0},
                  ${options?.style?.background?.a || 0});
                  `
            }
            ${ options?.style?.borderRadius === undefined ? `` : `
                border-radius: ${ options?.style?.borderRadius.value }${ options?.style?.borderRadius.type } 
              `
            }
            '
    >
      ${options?.children === undefined ? `` : `${options?.children}`}
    </${options?.seoTag || SeoTag.DIV}>`;
    
};

export enum Aligment {
  End = 'flex-end',
  Center = 'center',
  Start = 'flex-start',
  SpaceAround = 'space-around',
  SpaceBetween = 'space-between',
  SpaceEvenly = 'space-evenly',
}

interface ColumnI {
  MainAxisAligment: Aligment;
}

export const Column = ({
  MainAxisAligment = Aligment.Start
}:ColumnI) => {

}
