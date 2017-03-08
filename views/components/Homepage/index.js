import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import style from './index.css';
import MainMenu from '../MainMenu';

export default class Homepage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className={style.home}>
                <div className={style.menu}>
                    <MainMenu><Link to="/posts">Posts</Link></MainMenu>
                </div>
                <div className={style.menu}>
                    <MainMenu><Link to="/projects">Projects</Link></MainMenu>
                </div>
                <div className={style.menu}>
                    <MainMenu><Link to="/contact">Contact</Link></MainMenu>
                </div>
                <div className={style.menu}>
                    <MainMenu><Link to="/about">About</Link></MainMenu>
                </div>
            </div>
        );
    }
}
 