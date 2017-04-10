import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import style from './index.pcss';

export default class PostList extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <section className={style.warp}>
                <h2 className={style.header}>
                    Posts
                </h2>
                <section className={style.list}>
                    <section className={style.post}>
                        <h3 className={style.title}>
                            <Link to="/posts/1110">这是一段文章标题</Link>
                        </h3>
                        <div className={style.label}>
                            <span className={style.category}><Link>类目1</Link></span>
                            <span className={style.tag}><Link>类目1</Link></span>
                        </div>
                        <section className={style.content}>
                            <Link to="posts/1110">
                                这是一段文章内容，这是一段文章内容，这是一段文章内容，这是一段文章内容，这是一段文章内容，这是一段文章内容，这是一段文章内容，这是一段文章内容，
                            </Link>
                        </section>
                        <time className={style.time}>2017-01-01</time>
                    </section>
                </section>
            </section>
        );
    }
}
 