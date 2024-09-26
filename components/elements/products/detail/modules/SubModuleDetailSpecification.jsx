import React from 'react';
import Link from 'next/link';

const SubModuleDetailSpecification = () => {
    return (
        <div className="ps-product__specification">
            <p>
                <strong>CATEGORY:</strong>
                <Link href="/shop">
                    <a>Women</a>
                </Link>
                <Link href="/shop">
                    <a> Top</a>
                </Link>
                <Link href="/shop">
                    <a> Accessories</a>
                </Link>
                <Link href="/shop">
                    <a> Jewellery</a>
                </Link>
            </p>
            <p>
                <strong>Tags:</strong>
                <Link href="/shop">
                    <a>clothing</a>
                </Link>
                <Link href="/shop">
                    <a> t-shirt</a>
                </Link>
                <Link href="/shop">
                    <a> woman</a>
                </Link>
            </p>
        </div>
    );
};

export default SubModuleDetailSpecification;
