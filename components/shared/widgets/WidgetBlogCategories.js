import React from 'react';

const WidgetBlogCategories = () => {
    return (
        <aside className="widget widget_blog widget_categories">
            <h3 className="widget-title">Categories</h3>
            <ul className="ps-list--under">
                <li>
                    <a className="ps-link--line" href="blog-sidebar.html">
                        Beauty
                    </a>
                </li>
                <li>
                    <a className="ps-link--line" href="blog-sidebar.html">
                        DIY
                    </a>
                </li>
                <li>
                    <a className="ps-link--line" href="blog-sidebar.html">
                        Fashion
                    </a>
                </li>
                <li>
                    <a className="ps-link--line" href="blog-sidebar.html">
                        Men
                    </a>
                </li>
                <li>
                    <a className="ps-link--line" href="blog-sidebar.html">
                        Lifestyle
                    </a>
                </li>
                <li>
                    <a className="ps-link--line" href="blog-sidebar.html">
                        Uncategorized
                    </a>
                </li>
                <li>
                    <a className="ps-link--line" href="blog-sidebar.html">
                        Women
                    </a>
                </li>
            </ul>
        </aside>
    );
};

export default WidgetBlogCategories;
