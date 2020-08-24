import React, { Component,Suspense} from 'react';
import routes from './routes';
import {BrowserRouter as Router} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';

// import { BrowserRouter as Router,withRouter, Route,Switch} from "react-router-dom";

console.error(routes,'routes')
export default class App extends Component{
    render(){
        return (
            <Router>
                <Suspense fallback={null}>    
                     {renderRoutes(routes)}
                </Suspense>
            </Router>
        )
    }
}

