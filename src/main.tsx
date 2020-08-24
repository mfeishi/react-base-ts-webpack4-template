import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';


ReactDOM.render(<App />, document.getElementById('app'))




// type Name = string
// type NameResolver = ()=>string
// type NameOrResolver = Name | NameResolver
// function getName(x:NameOrResolver){
//     if(typeof x === 'string'){
//         return 'wr'
//     }else{
//         return 'func'
//     }
// }

// type eventNames = 'wr' | 'test'
// let str:eventNames = 'wr'

// // let tom:[string,boolean] = ['zww',true]
// let tom:[string, number] = ['zee',4];

// enum Fruits{
//     a,
//     b,
//     c,
// }

// abstract class Test{
//    protected age:number;
//    constructor(age:number){
//       this.age = age
//    }
//    public abstract eat():void;
// }

// class Son extends Test{
//     constructor(props:any){
//         super(props)
//     }
//     eat(){
//         console.error(this.age,'eat')
//     }
// }

// var so:Son = new Son(344)
// // so.eat()


// abstract class Phone{
//     name:string;
//     constructor(name:string){
//         this.name = name
//     }
//     abstract getName():void;
// }

// interface Common{
//     say():void,
//     close():void
// }
// interface Open{
//     open():void
// }
// class Huawei extends Phone implements Common,Open{
//     system:string= 'Android'
//     getName(){
//         console.error(this.name)
//     }
//     say(){
//         console.error(this.system)
//     }   
//     open(){

//     }
//     close(){

//     }
// }
// class Iphone implements Common,Open{
//     system:string= 'ios'
//     say(){
//         console.error(this.system)
//     }   
//     open(){

//     }
//     close(){

//     }
// }

// let h = new Huawei('huawei1111')
// let i = new Iphone()
// h.getName()
// i.say()

// tom.push('wr')
// console.error(tom,'ttt')
// console.error(getName(()=>'z')) 


// import test from './test';
// let t = require('./test');

// import {Foo,Hema} from 'jquery';

// let m:Hema = function(x){
//     return false
// }
// let a:Animal = {
//     age:444
// }


// type SetUser = (name: string, age: number)=> void;

// interface Animal{
//     age:number
// }

// interface Dog extends Animal{
//     name:string
// }
// interface SearchFunc {
//     (source: string, subString: string): boolean;
//   }

// let fn:SearchFunc = function(a,b){
//     return true
// }

// interface Hema{
//     age:number
// }
// interface Hema{
//     sex:number
// }

// let h:Hema = {
//     age:1,
//     sex:444
// }


// type Animal = {
//     age:number
// }
// type Dog = Animal&{
//     name:string
// }
// let d:Dog = {
//     age:3,
//     name:'www'
// }


// import {age} from 'jquery';
// console.error(age,'name')

// console.error(jquery)
// let f:Foo = {
//     foo:'sss'
// }
// console.error(f,'ff')



