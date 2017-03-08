import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import style from './index.css';

export default class Post extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    render() {
        return (
            <article className={style.post}>
                <header className={style.header}>
                    <h1 className={style.title}>
                        这是文章的题目
                    </h1>
                    <section className={style.label}>
                        <Link to="/posts/">类目1</Link>
                        <Link to="/posts/">标签1</Link>
                        <Link to="/posts/">标签2</Link>
                    </section>
                    <time className={style.time}>2017-01-01</time>
                </header>
                <section className={style.content}>
                    内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                    内容内容内容内容内容内容内容内容内容内容内容内容
                    内容内容内容内容内容内容内容内容内容内容内容内容
                </section>
            </article>
        );
    }
}
 