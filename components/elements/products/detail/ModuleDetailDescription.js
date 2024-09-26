import React from 'react';

const ModuleDetailDescription = () => {
    return (
        <div className="row">
            <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-12 ">
                <div className="ps-document">
                    <h4>Introduction</h4>
                    <p>
                        With ultralight, quality cotton canvas, the JanSport
                        Houston backpack is ideal for a life-on-the-go. This
                        backpack features premium faux leather bottom and trim
                        details, padded 15 in laptop sleeve and tricot lined
                        tablet sleeve
                    </p>
                    <h4>Features</h4>
                    <ul>
                        <li>Fully padded back panel, web hauded handle</li>
                        <li>
                            Internal padded sleeve fits 15″ laptop &amp; unique
                            fabric application
                        </li>
                        <li>Internal tricot lined tablet sleeve</li>
                        <li>One large main compartment and zippered</li>
                        <li>Premium cotton canvas fabric</li>
                    </ul>
                </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12 ">
                <img
                    src="/static/img/product/default/default-content.jpg"
                    alt=""
                />
            </div>
        </div>
    );
};

export default ModuleDetailDescription;
