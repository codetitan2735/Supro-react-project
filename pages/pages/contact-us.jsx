import React from 'react';
import ContainerPage from '~/components/layouts/ContainerPage';
import FormContact from '~/components/shared/forms/FormContact';

const ContactUsPage = () => {
    return (
        <ContainerPage title="Contact">
            <div className="ps-page--default ps-page--contact">
                <div
                    className="ps-page__header bg--top"
                    style={{
                        backgroundImage: `url(/static/img/bg/contact-bg.jpg)`,
                    }}>
                    <div className="container">
                        <h3>Contact</h3>
                        <ul className="ps-breadcrumb">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                <div className="ps-page__content">
                    <div className="container">
                        <div className="ps-contact">
                            <div className="ps-section__left">
                                <FormContact />
                            </div>
                            <div className="ps-section__right">
                                <ul className="ps-list--social">
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                                <figure>
                                    <figcaption>Our Office</figcaption>
                                    <p>
                                        15 St Margarets Lane New York, NY 10033
                                    </p>
                                </figure>
                                <figure>
                                    <figcaption>Get in Touch</figcaption>
                                    <aside>
                                        <p>
                                            <strong className="text-uppercase">
                                                Phone Number
                                            </strong>
                                        </p>
                                        <p>631-679-6357</p>
                                    </aside>
                                    <aside>
                                        <p>
                                            <strong className="text-uppercase">
                                                Email
                                            </strong>
                                        </p>
                                        <p>
                                            <a href="#">supro@example.com</a>
                                        </p>
                                    </aside>
                                </figure>
                            </div>
                        </div>
                        <div className="ps-contact-location">
                            <article>
                                <div className="row">
                                    <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                        <h4>Store in London</h4>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 ">
                                        <figure>
                                            <figcaption>LOCATION</figcaption>
                                            <p>
                                                16 Iolaire Road, New Abbey, DG2
                                                2SX
                                            </p>
                                        </figure>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 ">
                                        <figure>
                                            <figcaption>
                                                PHONE NUMBER
                                            </figcaption>
                                            <p>077 6941 6241</p>
                                        </figure>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 ">
                                        <figure>
                                            <figcaption>Email</figcaption>
                                            <p>
                                                <a href="#">
                                                    suprolondon@example.com
                                                </a>
                                            </p>
                                        </figure>
                                    </div>
                                </div>
                            </article>
                            <article>
                                <div className="row">
                                    <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                        <h4>Store in Sydney</h4>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 ">
                                        <figure>
                                            <figcaption>LOCATION</figcaption>
                                            <p>
                                                16 Iolaire Road, New Abbey, DG2
                                                2SX
                                            </p>
                                        </figure>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 ">
                                        <figure>
                                            <figcaption>
                                                PHONE NUMBER
                                            </figcaption>
                                            <p>077 6941 6241</p>
                                        </figure>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 ">
                                        <figure>
                                            <figcaption>Email</figcaption>
                                            <p>
                                                <a href="#">
                                                    suprosydsney@example.com
                                                </a>
                                            </p>
                                        </figure>
                                    </div>
                                </div>
                            </article>
                            <article>
                                <div className="row">
                                    <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                        <h4>Store in Hamburg</h4>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 ">
                                        <figure>
                                            <figcaption>LOCATION</figcaption>
                                            <p>
                                                16 Iolaire Road, New Abbey, DG2
                                                2SX
                                            </p>
                                        </figure>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 ">
                                        <figure>
                                            <figcaption>
                                                PHONE NUMBER
                                            </figcaption>
                                            <p>077 6941 6241</p>
                                        </figure>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 ">
                                        <figure>
                                            <figcaption>Email</figcaption>
                                            <p>
                                                <a href="#">
                                                    hamburg@example.com
                                                </a>
                                            </p>
                                        </figure>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                <div className="ps-contact-map">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14049.340485982573!2d-0.12031301106485542!3d51.50228117351734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce176ac979%3A0x42af85654e23a0b4!2sThe%20National%20Gallery!5e0!3m2!1sen!2s!4v1582441665587!5m2!1sen!2s"
                            height={500}></iframe>
                    </div>
                </div>
            </div>
        </ContainerPage>
    );
};

export default ContactUsPage;
