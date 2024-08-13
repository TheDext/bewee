declare module '*.scss' {
    interface IClassNames {
        [className: string]: string;
    }
    const className: IClassNames;
    export = className;
}
declare module '*.module.scss' {
    const Styles: { [className: string]: string };
    export default Styles;
}

// declare module "*.svg" {
//   const svg: string;
//   export default svg;
// }

declare module '*.svg' {
    import React from 'react';
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

declare const __IS_DEV__: boolean;
