import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import './index.pcss';

import Layout from './components/Layout';
import Homepage from './components/Homepage';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Homepage}/>
            <Route path="projects"/>
            <Route path="about"/>
            <Route path="contact"/>
        </Route>
    </Router>
), document.getElementById('root'));