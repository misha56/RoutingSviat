import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from "./NewPost/NewPost";

class Blog extends Component {

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to='/' exact>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/new-post">New Post</NavLink>
                            </li>

                        </ul>
                    </nav>
                </header>
                {/*<Posts/>*/}
                <Route path='/' exact component={Posts}/>
                <Route path='/new-post' component={NewPost}/>

                {/*<section>*/}
                {/*    <FullPost id={this.state.selectedPostId} />*/}
                {/*</section>*/}
                {/*<section>*/}
                {/*    <NewPost />*/}
                {/*</section>*/}
            </div>
        );
    }
}

export default Blog;
