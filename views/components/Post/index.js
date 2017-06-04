import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

import style from './index.pcss';

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
            <div className={style.page}>
                <aside className={style.prev}>
                </aside>
                <aside className={style.next}>
                </aside>
                <article className={style.post}>
                    <header className={style.header}>
                        <h1 className={style.title}>
                            这是文章的题目
                        </h1>
                        <time className={style.time}>05 may 2017</time>
                    </header>
                    <section className={style.content}>
                        <p>
                            内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                            内容内容内容内容内容内容内容内容内容内容内容内容
                            内容内容内容内容内容内容内容内容内容内容内容内容
                        </p>
                    </section>
                </article>
            </div>
        );
    }
}
 