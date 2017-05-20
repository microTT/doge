import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import style from './index.pcss';
import PostList from '../PostList';
import PostPanel from '../PostPanel';

export default class Homepage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <PostList/>
        );
    }
}
 