import React from 'react';
import Rating from '~/components/elements/Rating';

const ModuleDetailReview = () => {
    return (
        <div className="ps-product__review">
            <h4>1 review for Contrasting Design T-Shirt</h4>
            <div className="ps-block--comment ps-block--comment-review">
                <div className="ps-block__thumbnail">
                    <img src="/static/img/users/1.jpg" alt="" />
                </div>
                <div className="ps-block__content">
                    <Rating />
                    <h5>
                        Martin Katrina <span> -June 20, 2019 </span>
                    </h5>
                    <p>Aenean sit amet odio est.</p>
                </div>
            </div>
        </div>
    );
};

export default ModuleDetailReview;
