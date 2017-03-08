import  React, { Component } from 'react';

import style from './index.css';
import { Link } from 'react-router';

export default class Posts extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.wrap}>
                <aside className={style.filterLabel}>
                    <ul className={style.category}>
                        <li><Link to="/posts">类目1（100）</Link></li>
                        <li><Link to="/posts">类目2（100）</Link></li>
                    </ul>
                    <ul className={style.tags}>
                        <li><Link to="/posts">标签1</Link></li>
                        <li><Link to="/posts">标签2</Link></li>
                    </ul>
                </aside>
                <div className={style.childView}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}