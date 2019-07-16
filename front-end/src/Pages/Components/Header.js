import React from 'react';

function Header() {
    return (
        <nav id="header" class="navbar navbar-light bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <a href="/">
                            <div className="brand-name-container">
                                <div className="brand-logo"></div>
                                <div className="seperator"></div>
                                <div className="brand-text-logo"></div>
                            </div>
                        </a>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="search-container">
                            <span className="fa fa-search icon icon-left"></span>
                            <span className="fa fa-times  icon icon-right"></span>
                            <input type="text" className="form-control" placeholder="search here" />
                            <div className="search-placeholder" role="button">
                                <span><i class="fa fa-search"></i> Search</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Header;