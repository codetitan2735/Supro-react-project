import React from 'react';
const HomeSimplePromotions = () => {
    return (
        <div
            className="ps-home-promotion bg--top"
            style={{
                backgroundImage: `url(/static/img/bg/home-2/home-promotion.jpg)`,
            }}>
            <div className="container">
                <div className="ps-section__content">
                    <h5>Deal of the day</h5>
                    <h2>
                        Sale Up to<span>50%</span>
                    </h2>
                    <p>
                        Navy coat featuring a straight fit, a classic lapel
                        collar, two-button fastening and a back vent.
                    </p>
                    <a className="ps-btn ps-btn--outline" href="#">
                        Shop now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HomeSimplePromotions;
