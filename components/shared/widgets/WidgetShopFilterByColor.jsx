import React from 'react';

const WidgetShopFilterByColor = () => {
    return (
        <aside className="widget widget_shop">
            <h3 className="widget-title">Color</h3>
            <div className="widget__content">
                <div className="widget__colors">
                    <div className="ps-color black active">
                        <span className="ps-color__left">
                            <span className="ps-color__swatch"></span>
                            <i> Black</i>
                        </span>
                    </div>
                    <div className="ps-color blue">
                        <span className="ps-color__left">
                            <span className="ps-color__swatch"></span>
                            <i> Blue</i>
                        </span>
                    </div>
                    <div className="ps-color gold">
                        <span className="ps-color__left">
                            <span className="ps-color__swatch"></span>
                            <i> Gold</i>
                        </span>
                    </div>
                    <div className="ps-color nude">
                        <span className="ps-color__left">
                            <span className="ps-color__swatch"></span>
                            <i> Nude</i>
                        </span>
                    </div>
                    <div className="ps-color orange">
                        <span className="ps-color__left">
                            <span className="ps-color__swatch"></span>
                            <i> Orange</i>
                        </span>
                    </div>
                    <div className="ps-color red">
                        <span className="ps-color__left">
                            <span className="ps-color__swatch"></span>
                            <i> Red</i>
                        </span>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default WidgetShopFilterByColor;
