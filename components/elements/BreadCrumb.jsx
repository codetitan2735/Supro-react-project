import React from 'react';
import Link from 'next/link';

const BreadCrumb = ({ breacrumb, layout }) => {
    return (
        <ul className="ps-breadcrumb">
            {breacrumb.map((item) => {
                if (!item.url) {
                    return <li key={item.text}>{item.text}</li>;
                } else {
                    return (
                        <li key={item.text}>
                            <Link href={item.url}>
                                <a>{item.text}</a>
                            </Link>
                        </li>
                    );
                }
            })}
        </ul>
    );
};

export default BreadCrumb;
