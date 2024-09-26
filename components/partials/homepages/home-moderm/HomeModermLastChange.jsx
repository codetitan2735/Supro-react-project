import React from 'react';
import { baseUrl } from '~/repositories/Repository';

const HomeModermLastChange = () => {
    return (
        <div className="ps-home-last-change">
            <div className="container">
                <div className="ps-block--last-change">
                    <a
                        className="bg--cover"
                        href="#"
                        style={{
                            backgroundImage: `url(/static/img/homepage/home-moderm/last-change.jpg)`,
                        }}></a>
                    <div className="ps-block__content">
                        <small>Last Change</small>
                        <h4>Sale up to 50%</h4>
                        <p>
                            Embrace modern colour and style in your space with
                            the woven cotton comfort.
                        </p>
                        <a className="ps-link--under" href="#">
                            Discover more
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeModermLastChange;
