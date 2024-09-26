import React from 'react';

const AboutQuote = () => {
    return (
        <div className="ps-about-quote">
            <div className="container ps-section__container">
                <div className="ps-section__left">
                    <img src="/static/img/pages/about-quote.jpg" alt="" />
                </div>
                <div className="ps-section__right">
                    <blockquote>
                        <p>
                            Supro recognises individuality. We see you. We
                            embrace it. We make fashion accessible and fun
                        </p>
                    </blockquote>
                    <figure>
                        <small>CARINE ROITFELD</small>
                        <h4>Co-Founder</h4>
                        <p>
                            From over 4 million fans on social and an online
                            magazine, we’re the dress you need at the weekend,
                            and the LOL moments you need when you’re down.
                        </p>
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default AboutQuote;
