import React, { useEffect } from 'react';
import Link from 'next/link';

function Error({ statusCode }) {
    return (
        <div className="ps-page--404">
            <div className="container">
                <div className="ps-page__content">
                    <form
                        className="ps-form--404"
                        action="404-page.html"
                        method="get">
                        <div className="ps-form__header">
                            <i className="icon-confused"></i>
                        </div>
                        <h3>Ohh! Page Not Found</h3>
                        <p>
                            It seems we can't find what you're looking for.
                            Perhaps searching can help or go back to
                            <Link href="/">
                                <a> Homepage</a>
                            </Link>
                        </p>
                        <div className="form-group--icon">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Search..."
                            />
                            <button>
                                <i className="icon-magnifier"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Error;
