// declare module 'jquery'

declare module 'jquery' {
    export interface Foo {
        foo: string;
    } 
    export type Hema = (x:number)=>boolean;
}

// declare module 'bar' {
//     export function bar(): string;
// }

// declare function jQuery(selector: string):any;

// declare interface Test{
//      age:number
// }


// export const age: string;
