import  React, {Component} from 'react';
import classNames from 'classnames';
import style from './index.pcss';
import {Link} from 'react-router';

import PostPanel from '../PostPanel';

export default class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postList: [{
                id: 'post-1',
                style: {
                    background: '#FC9'
                }
            }, {
                id: 'post-2',
                style: {
                    background: '#F96'
                }
            }, {
                id: 'post-3',
                style: {
                    background: '#9C3'
                }
            }, {
                id: 'post-4',
                style: {
                    background: '#F93'
                }
            }, {
                id: 'post-5',
                style: {
                    background: '#F60'
                }
            }, {
                id: 'post-6',
                style: {
                    background: '#369'
                }
            }, {
                id: 'post-7',
                style: {
                    background: '#C93'
                }
            }]
        };
        console.log(props);
    }

    handleHover(type, index) {
        const postList = this.state.postList;
        let postListLength = postList.length;

        let nextList;
        if (type === "over") {
            nextList = postList.filter((post, postIndex) => {
                return postIndex != index;
            }).map((post) => {
                return Object.assign({}, post, {
                    hovered: true
                });
            });

            nextList.splice(index, 0, Object.assign({}, postList[index]));
        } else if (type === "out") {
            nextList = postList.filter((post, postIndex) => {
                return postIndex != index;
            }).map((post) => {
                return Object.assign({}, post, {
                    hovered: false
                });
            });

            nextList.splice(index, 0, Object.assign({}, postList[index]));
        }




        this.state = this.setState(Object.assign({}, this.state, {
            postList: nextList
        }));

    }

    render() {
        let postList = this.state.postList;
        return (
            <div className={style.postPanels}>
                {postList.map((post, index) => {
                    return (
                        <div className={classNames({
                            [style['panel']]: true
                        })}
                             key={index}
                             onMouseOver={this.handleHover.bind(this, 'over', index)}
                             onMouseOut={this.handleHover.bind(this, 'out', index)}>
                            <PostPanel post={post}>
                            </PostPanel>
                        </div>
                    )
                })}
            </div>
        )
            ;
    }
}