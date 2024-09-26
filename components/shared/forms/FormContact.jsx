import React from 'react';

const FormContact = () => {
    return (
        <form
            className="ps-form--contact"
            action="contact-us.html"
            method="get">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                    <div className="form-group">
                        <label>
                            Name <sup>*</sup>
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                    <div className="form-group">
                        <label>
                            Email<sup>*</sup>
                        </label>
                        <input
                            className="form-control"
                            type="email"
                            placeholder=""
                        />
                    </div>
                </div>
            </div>
            <div className="form-group">
                <label>
                    Your Message<sup>*</sup>
                </label>
                <textarea className="form-control" rows="6" placeholder="" />
            </div>
            <div className="form-group submit">
                <button className="ps-btn ps-btn--black">Send message</button>
            </div>
        </form>
    );
};

export default FormContact;
