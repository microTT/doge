import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, IndexRedirect, browserHistory} from 'react-router'

import './index.pcss';

import Layout from './components/Layout';
import Homepage from './components/Homepage';
import PostList from './components/PostList';
import Post from './components/Post';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRedirect to="/posts"/>
            <Route path="posts" components={PostList}/>
            <Route path="posts/:paramName" components={Post}/>
            <Route path="projects"/>
            <Route path="about"/>
            <Route path="contact"/>
        </Route>
    </Router>
), document.getElementById('root'));