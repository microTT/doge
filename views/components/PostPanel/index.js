import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import classNames from 'classnames';
import colorFunction from 'css-color-function';

import style from './index.pcss';

export default class PostPanels extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = this.props.post;
    }

    render() {
        let post = this.props.post;
        console.log(post);
        return (
            <div className={classNames({
                [style['panel']]: true,
                [style['shrinkLeft']]: post.shrinkLeft,
                [style['expand']]: post.expand,
                [style['shrinkRight']]: post.shrinkRight,
                [style['hovered']]: post.hovered
            })}>
                <div className={style.content}>
                    <time className={style.time}>3 JUL 2014</time>
                    <h2 className={style.title}>
                        Hello World, I’m still here
                    </h2>
                    <p className={style.excerpt}>
                        excerpt excerpt excerpt excerpt excerpt excerpt excerpt excerpt excerpt
                    </p>
                </div>
                <div className={style.color} style={post.style}></div>
            </div>
        );
    }
}