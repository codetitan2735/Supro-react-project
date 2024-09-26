import React from 'react';
import CountDown from '~/components/elements/CountDown';

const HomeModermDealOfDay = () => {
    return (
        <div className="ps-deal-of-day ps-deal-of-day--2">
            <div className="container">
                <div className="ps-section__container">
                    <div className="ps-section__left">
                        <small>Deal of the day</small>
                        <h3>Luxe Armchair</h3>
                        <h5>
                            <del>$690.90</del>
                            $588.90
                        </h5>
                        <div className="ps-section__badge">
                            <span className="ps-badge ps-badge--sale">
                                Save <strong>13</strong>%
                            </span>
                        </div>
                        <p>
                            Marry comfort and style in your home with the plush{' '}
                            <br /> and supportive seating.
                        </p>
                        <div className="ps-section__countdown">
                            <CountDown
                                timeTillDate="12 31 2021, 6:00 am"
                                timeFormat="MM DD YYYY, h:mm a"
                            />
                        </div>
                        <div className="ps-section__footer">
                            <a className="ps-btn" href="#">
                                Shop Now
                            </a>
                        </div>
                    </div>
                    <div className="ps-section__right">
                        <img
                            src="/static/img/homepage/home-moderm/deal-of-day.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeModermDealOfDay;
