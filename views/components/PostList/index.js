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
                backgroundColor: '#FC9'
            }, {
                backgroundColor: '#F96'
            }, {
                backgroundColor: '#9C3'
            }, {
                backgroundColor: '#F93'
            }, {
                backgroundColor: '#F60'
            }, {
                backgroundColor: '#369'
            }, {
                backgroundColor: '#C93'
            }]
        };
    }

    handleHover(type, index) {
        const postList = this.state.postList;
        let postListLength = postList.length;
console.log(index);
        let nextPost = Object.assign({}, postList[index]);

        let leftPost = index > 0 ? Object.assign({}, postList[index - 1]) : null;
        let rightPost = index < postListLength - 1 ? Object.assign({}, postList[index + 1]) : null;

        if (type === "over") {
            leftPost && (leftPost.shrinkLeft = true);
            nextPost.expand = true;
            rightPost && (rightPost.shrinkRight = true);
        } else if (type = "out") {
            leftPost && (leftPost.shrinkLeft = false);
            nextPost.expand = false;
            rightPost && (rightPost.shrinkRight = false);
        }

        let changePostList = [nextPost];
        leftPost && changePostList.unshift(leftPost);
        rightPost && changePostList.push(rightPost);
        let nextList = postList.slice();
        let repalcePos = index - 1 >= 0 ? index - 1 : index;
        nextList.splice(repalcePos, changePostList.length, ...changePostList);

        console.log(nextList);

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