import React from 'react';
import ContainerPage from '~/components/layouts/ContainerPage';
import BreadCrumb from '~/components/elements/BreadCrumb';
import Link from 'next/link';

const LoginPage = () => {
    const breadcrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'login',
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
                        <form
                            className="ps-form--auth"
                            action="/auth/login"
                            method="get">
                            <ul className="ps-tab-list">
                                <li className="active">
                                    <Link href="/auth/login">
                                        <a>Login</a>
                                    </Link>
                                </li>
                                <li>
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
                                        placeholder="Password"
                                    />
                                </div>
                                <div className="form-group">
                                    <div className="ps-checkbox">
                                        <input
                                            className="form-control"
                                            type="checkbox"
                                            id="remember/"
                                            name="remember"
                                        />
                                        <label htmlFor="remember">
                                            Remember Me
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group submit">
                                    <button className="ps-btn ps-btn--fullwidth ps-btn--black">
                                        Submit
                                    </button>
                                </div>
                                <p>
                                    <span className="mb-10">Connect with</span>
                                </p>
                                <ul className="ps-list--social">
                                    <li>
                                        <a className="facebook" href="#">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="google-plus" href="#">
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
                        </form>
                    </div>
                </div>
            </div>
        </ContainerPage>
    );
};

export default LoginPage;
