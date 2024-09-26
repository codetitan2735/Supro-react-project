import React from 'react';
import ListSocial from '~/components/elements/lists/ListSocial';
import Logo from '~/components/elements/basic/Logo';

const FooterBoxed = () => {
    return (
        <footer className="ps-footer--boxed">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 ">
                        <div className="ps-site-info">
                            <Logo light={true} />
                            <a className="ps-logo" href="index.html">
                                <img src="img/logo-white.png" alt="" />
                            </a>
                            <div className="row">
                                <div className="col-xl-12 col-lg-6 col-md-6 col-sm-12 col-12 ">
                                    <figure>
                                        <figcaption>Our Location:</figcaption>
                                        <p>
                                            869 General Village Apt. 645,
                                            Moorebury
                                        </p>
                                    </figure>
                                </div>
                                <div className="col-xl-12 col-lg-6 col-md-6 col-sm-12 col-12 ">
                                    <figure>
                                        <figcaption>24/7 hotline:</figcaption>
                                        <p>(+99) 052 128 2399</p>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 ">
                        <div className="ps-footer__right">
                            <ul className="ps-footer__nav">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Shop</a>
                                </li>
                                <li>
                                    <a href="#">Collection</a>
                                </li>
                                <li>
                                    <a href="#">Pages</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                            <ListSocial more={true} />
                            <p className="ps-footer__copyright">
                                Copyright Supro 2021. All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterBoxed;
