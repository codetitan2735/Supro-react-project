import React from "react";

const WidgetShopFilterByPriceRange = () => {
  return (
    <aside className="widget widget_shop">
      <h3 className="widget-title">Price</h3>
      <div className="widget__content">
        <ul className="ps-list--under">
          <li>
            <a href="#">$0.00 - $10.00</a>
          </li>
          <li>
            <a href="#">$10.00 - $20.00</a>
          </li>
          <li>
            <a href="#">$20.00 - $30.00</a>
          </li>
          <li>
            <a href="#">$30.00 - $40.00</a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default WidgetShopFilterByPriceRange;
