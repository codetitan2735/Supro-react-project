import React from 'react';

const AboutLeadership = () => {
    return (
        <div className="ps-about-leadership">
            <div className="container">
                <div className="ps-section__header">
                    <h3>Leadership Members</h3>
                </div>
                <div className="ps-section__content">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 ">
                            <div className="ps-block--leadership">
                                <img src="img/pages/member-1.jpg" alt="" />
                                <figure>
                                    <figcaption>Christine McKenazie</figcaption>
                                    <p>FOUNDER</p>
                                </figure>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 ">
                            <div className="ps-block--leadership">
                                <img src="img/pages/member-2.jpg" alt="" />
                                <figure>
                                    <figcaption>Lora Davidson</figcaption>
                                    <p>SALE MANAGER</p>
                                </figure>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 ">
                            <div className="ps-block--leadership">
                                <img src="img/pages/member-3.jpg" alt="" />
                                <figure>
                                    <figcaption>Wayne Swanson</figcaption>
                                    <p>LEAD DESIGNER</p>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutLeadership;
