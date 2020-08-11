import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';



interface wr{
    color:number
}
const a:wr = {
    name:'ssss'
}

// console.error(a,'sss')


ReactDOM.render(<App />, document.getElementById('app'))
