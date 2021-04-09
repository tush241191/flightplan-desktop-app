import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from "./App"
import Timer from './pages/timer';

ReactDOM.render(
    <Router>
        <div>
            <main>
                <Route exact path="/" component={Home} />
                <Route exact path="/timer/:code" component={Timer} />
            </main>
        </div>
    </Router>, 
    document.getElementById("root")
    
)
