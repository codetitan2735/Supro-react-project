import React from 'react';
import { baseUrl } from '~/repositories/Repository';

const HomeModermCollection = () => {
    return (
        <div className="ps-home-collection">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                        <div className="ps-block--collection color orange">
                            <a
                                className="ps-block__overlay bg--bottom"
                                href="#"
                                style={{
                                    backgroundImage: `url(/static/img/collection/home-2/simple-1.jpg)`,
                                }}></a>
                            <p>Living Room</p>
                            <h5>Side Tables</h5>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                        <div className="ps-block--collection color green">
                            <a
                                className="ps-block__overlay bg--top"
                                href="#"
                                style={{
                                    backgroundImage: `url(/static/img/collection/home-2/simple-2.jpg)`,
                                }}
                                data-background="img/collection/home-2/simple-2.jpg"></a>
                            <p>Decor</p>
                            <h5>Vases & Bowls</h5>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ">
                        <div className="ps-block--collection color pink">
                            <a
                                className="ps-block__overlay bg--bottom"
                                href="#"
                                style={{
                                    backgroundImage: `url(/static/img/collection/home-1/1.jpg)`,
                                }}></a>
                            <p>Kitchen</p>
                            <h5>Knife Sets</h5>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 ">
                        <div className="ps-block--collection color cyan">
                            <a
                                className="ps-block__overlay bg--top"
                                href="#"
                                style={{
                                    backgroundImage: `url(/static/img/collection/home-1/2.jpg)`,
                                }}></a>
                            <p>Bed & Bath</p>
                            <h5>Throw Rugs</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeModermCollection;
