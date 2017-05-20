import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import classNames from 'classnames';

import style from './index.pcss';

export default class PostPanels extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        let post = this.props.post;
        console.log(post);
        return (
            <div className={classNames({
                [style['panel']]: true,
                [style['shrinkLeft']]: post.shrinkLeft,
                [style['expand']]: post.expand,
                [style['shrinkRight']]: post.shrinkRight
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
                <div className={style.color} style={{
                    backgroundColor: post.backgroundColor
                }}></div>
            </div>
        );
    }
}