import React from 'react';
import Link from 'next/link';

const Logo = ({ url = '/', light }) => {
    if (light) {
        return (
            <Link href={url}>
                <a className="ps-logo">
                    <img src="/static/img/logo-white.png" alt="" />
                </a>
            </Link>
        );
    } else {
        return (
            <Link href={url}>
                <a className="ps-logo">
                    <img src="/static/img/logo.svg" alt="" />
                </a>
            </Link>
        );
    }
};

export default Logo;
