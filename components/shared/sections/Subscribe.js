import React from 'react';

const Subscribe = () => {
    return (
        <div className="ps-home-subscribe">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12 ">
                        <figure>
                            <figcaption>Keep Connected</figcaption>
                            <p>
                                Get updates by subscribe our weekly newsletter
                            </p>
                        </figure>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12 ">
                        <form
                            className="ps-form--keep-connected"
                            action="/"
                            method="get">
                            <i className="icon-envelope"></i>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Email Address"
                            />
                            <button>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
