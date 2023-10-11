// declare module '*.svg' {
//   const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
//   const content: string;

//   export { ReactComponent };
//   export default content;
// }

type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;

type OptionalRecord<K extends keyof any, T> = {
    [P in K]?: T;
};

type Mods = Record<string, boolean | string | undefined>


type ErrorArraysByFields = Record<string, string[]>

type ErrrosFlags<T extends ErrorArraysByFields> = {
    //@ts-ignore
    [K in keyof T]: T[K] extends Array<infer U> ? Record<U, boolean> : never;
}


type ErrorsConfig<ValidationErrrosFlags> = {
    [Field in keyof ValidationErrrosFlags]: {
        messages: {
            [Error in keyof ValidationErrrosFlags[Field]]: string
        },
        [key: string]: any
    }
} 


declare module 'server-only'
