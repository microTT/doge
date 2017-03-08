import  React, { Component } from 'react';
import { Link } from 'react-router';
import style from './index.css';

import MainMenu from '../mainMenu';

export default class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.content}>
                <header className={style.header}>
                    <Link to="/">This is what?</Link>
                </header>
                <section className={style.childView}>
                    {this.props.children}
                </section>
            </div>
        );
    }
}