import React from 'react';

const SiteFeatures = () => {
    return (
        <div className="ps-site-features">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 ">
                        <div className="ps-block--box-icon">
                            <i className="icon-location"></i>
                            <figure>
                                <figcaption>Free Ship</figcaption>
                                <p>Orders over $100</p>
                            </figure>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 ">
                        <div className="ps-block--box-icon">
                            <i className="icon-refresh"></i>
                            <figure>
                                <figcaption>Free Returns</figcaption>
                                <p>Withthin 30 Days</p>
                            </figure>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 ">
                        <div className="ps-block--box-icon">
                            <i className="icon-lock"></i>
                            <figure>
                                <figcaption>100% SECURE</figcaption>
                                <p>Online Shopping</p>
                            </figure>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 ">
                        <div className="ps-block--box-icon">
                            <i className="icon-tag"></i>
                            <figure>
                                <figcaption>Best Price</figcaption>
                                <p>Guaranteed</p>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SiteFeatures;
