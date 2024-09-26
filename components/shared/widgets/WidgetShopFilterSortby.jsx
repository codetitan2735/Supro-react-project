import React from 'react';

const WidgetShopFilterSortby = () => {
    return (
        <aside className="widget widget_shop">
            <h3 className="widget-title">Sort By</h3>
            <div className="widget__content">
                <ul className="ps-list--under">
                    <li>
                        <a href="#">Default</a>
                    </li>
                    <li>
                        <a href="#">Popularity</a>
                    </li>
                    <li>
                        <a href="#">Average rating</a>
                    </li>
                    <li>
                        <a href="#">Newest</a>
                    </li>
                    <li>
                        <a href="#">Price: low to high</a>
                    </li>
                    <li>
                        <a href="#">Price: high to low</a>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default WidgetShopFilterSortby;
