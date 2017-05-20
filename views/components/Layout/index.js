import  React, {Component} from 'react';
import {Link} from 'react-router';
import style from './index.pcss';

import MainMenu from '../mainMenu';

export default class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.content}>
                <header className={style.header}>
                    <div className={style.nav}>
                        <div className={style.leftLinks}>
                            <Link to="/about">
                                <span>About</span>
                                <span>About</span>
                            </Link>
                            <Link to="/about">
                                <span>About</span>
                                <span>About</span>
                            </Link>
                        </div>
                        <Link to="/" className={style.logo}>
                            <img src=""/>
                        </Link>
                        <div className={style.rightLinks}>
                            <Link to="/contact">
                                <span>Contact</span>
                                <span>Contact</span>
                            </Link>
                        </div>
                    </div>
                </header>
                <section className={style.childView}>
                    {this.props.children}
                </section>
            </div>
        );
    }
}