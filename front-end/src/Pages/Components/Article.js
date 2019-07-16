import React from 'react';
import { default as Reaction } from './ArticleReaction';

function Article() {
    return (
        <article className="card">
            <div className="post-container">
                <img src="https://scontent-ams4-1.cdninstagram.com/vp/1402f29d74777262487ce91a7933ef12/5DC021AD/t51.2885-15/sh0.08/e35/c0.179.1440.1440a/s640x640/65476776_127197551831745_4949150151068484606_n.jpg?_nc_ht=scontent-ams4-1.cdninstagram.com"
                    className="card-img" alt="post" />
            </div>
            <div className="card-body content-container">
                <header className="card-header">
                    <a href="/">
                        <span className="profile-pic-container">
                            <img src="https://scontent-amt2-1.cdninstagram.com/vp/6d8da76b4aecaf121729d1b7fa2ba7ce/5DA496BB/t51.2885-19/s150x150/43146007_338219383412225_7074956904937553920_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com" alt=""
                                className="profile-pic" />
                        </span>
                        <span className="username-badge">username</span>
                    </a>
                </header>
                <div className="reactions-container">
                    <Reaction />
                </div>
            </div>
        </article>
    )
}

export default Article;