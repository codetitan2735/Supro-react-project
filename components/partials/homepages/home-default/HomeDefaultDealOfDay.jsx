import React from 'react';
import { baseUrl } from '~/repositories/Repository';
import CountDown from '~/components/elements/CountDown';

const HomeDefaultDealOfDay = () => {
    return (
        <div
            className="ps-deal-of-day bg--top-right"
            style={{
                backgroundImage: `url('/static/img/bg/home-right-to-left/promotion-2.jpg')`,
            }}>
            <div className="ps-section__content">
                <p>Deal of the day</p>
                <h3>Hobo Shopper Bag</h3>
                <h5>
                    <del>$79.90</del>
                    $39.90
                </h5>
                <div className="ps-section__badge">
                    <span className="ps-badge ps-badge--sale">
                        Save <strong>50</strong>%
                    </span>
                </div>
                <div className="ps-section__countdown">
                    <CountDown
                        timeTillDate="12 31 2021, 6:00 am"
                        timeFormat="MM DD YYYY, h:mm a"
                    />
                </div>
                <div className="ps-section__footer">
                    <a className="ps-link--under" href="#">
                        Shop Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HomeDefaultDealOfDay;
