/**
 * Created by micro0 on 04/06/2017.
 */
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import style from './index.pcss';

export default class HeaderAside extends Component {
    constructor(props, context) {
        super(props, context);
        console.log(props);
    }

    render() {
        return (<aside className={style.aside}>
            <h1 className={style.header}>
                Hello, everyone!
            </h1>
            <div className={style.content}>
                <p>
                    content content 内容内容共
                </p>
                <p>
                    content content 内容内容共
                </p>
            </div>
        </aside>);
    }
}