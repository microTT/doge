import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import style from './index.css';

export default class MainMenu extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const align = this.props.align;
        return (
            <div className={style.menu}>
                <span className={style.link}>
                    {this.props.children}
                </span>
            </div>
        );
    }
}