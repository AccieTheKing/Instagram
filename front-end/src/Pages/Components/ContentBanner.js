import React from 'react';

const ContentBanner = (props) => {
    let data = props.node;

    return (
        <div className="col-12 col-sm-4">
            <img className="post-banner" src={data.display_url} alt="post"/>
        </div>
    )
}

export default ContentBanner;