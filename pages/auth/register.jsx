import React from 'react';
import ContainerPage from '~/components/layouts/ContainerPage';
import Link from 'next/link';
import BreadCrumb from '~/components/elements/BreadCrumb';

const RegisterPage = () => {
    const breadcrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Register',
        },
    ];
    return (
        <ContainerPage title="Login">
            <div className="ps-page--default">
                <div className="container">
                    <div className="ps-page__header">
                        <h3>My Account</h3>
                        <BreadCrumb breacrumb={breadcrumb} />
                    </div>
                    <div className="ps-page__content">
                        <div className="ps-tab-root">
                            <form
                                className="ps-form--auth"
                                action="index.html"
                                method="get">
                                <ul className="ps-tab-list">
                                    <li>
                                        <Link href="/auth/login">
                                            <a>Login</a>
                                        </Link>
                                    </li>
                                    <li className="active">
                                        <Link href="/auth/register">
                                            <a>Register</a>
                                        </Link>
                                    </li>
                                </ul>
                                <div className="ps-form__content">
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Username"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div className="form-group submit">
                                        <button className="ps-btn ps-btn--fullwidth ps-btn--black">
                                            Register
                                        </button>
                                    </div>
                                    <div className="ps-form__desc">
                                        <p>
                                            Your personal data will be used to
                                            support your experience throughout
                                            this website, to manage access to
                                            your account, and for other purposes
                                            described in our privacy policy.
                                        </p>
                                    </div>
                                    <div className="ps-form__social">
                                        <p>Connect with</p>
                                        <ul className="ps-list--social">
                                            <li>
                                                <a
                                                    className="facebook"
                                                    href="#">
                                                    <i className="fa fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="google-plus"
                                                    href="#">
                                                    <i className="fa fa-google-plus"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="twitter" href="#">
                                                    <i className="fa fa-twitter"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </ContainerPage>
    );
};

export default RegisterPage;
