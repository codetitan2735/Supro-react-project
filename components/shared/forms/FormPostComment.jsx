import React from 'react';

const FormPostComment = () => {
    return (
        <form
            className="ps-form--post-comment"
            action="index.html"
            method="get">
            <h3>Leave a Reply</h3>
            <p>Connect with</p>
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
            <p>Your email address will not be published.</p>
            <div className="form-group">
                <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Your messages"></textarea>
            </div>
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Name"
                        />
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Email"
                        />
                    </div>
                </div>
            </div>
            <div className="form-group">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Website"
                />
            </div>
            <div className="form-group">
                <button className="ps-btn ps-btn--black">Post comment</button>
            </div>
        </form>
    );
};

export default FormPostComment;
