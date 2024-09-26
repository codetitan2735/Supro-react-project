import React from 'react';
import ContainerPage from '~/components/layouts/ContainerPage';

const OrderTrackingPage = () => {
    return (
        <ContainerPage title="Order Tracking">
            <div className="ps-page--default">
                <div className="container">
                    <div className="ps-order-tracking">
                        <h3>Order Tracking</h3>
                        <p>
                            To track your order please enter your Order ID in
                            the box below and press the "Track" button. This was
                            given to you on your receipt and in the confirmation
                            email you should have received.
                        </p>
                        <form
                            className="ps-form--order-tracking"
                            action="index.html"
                            method="get">
                            <div className="form-group">
                                <label>Order ID</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Found in your confirmation email"
                                />
                            </div>
                            <div className="form-group">
                                <label>Billing email</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Email you used during checkout"
                                />
                            </div>
                            <div className="form-group submit">
                                <button className="ps-btn ps-btn--black ps-btn--fullwidth">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </ContainerPage>
    );
};

export default OrderTrackingPage;
