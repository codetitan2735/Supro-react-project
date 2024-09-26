import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import WidgetShopFilterSortby from '~/components/shared/widgets/WidgetShopFilterSortby';
import WidgetShopFilterByColor from '~/components/shared/widgets/WidgetShopFilterByColor';
import WidgetShopFilterByPriceRange from '~/components/shared/widgets/WidgetShopFilterByPriceRange';
import WidgetShopFitterByTags from '~/components/shared/widgets/WidgetShopFitterByTags';
import { toggleShopFilter } from '~/store/shop/action';
import ModuleDrawerShopOverlay from '~/components/shared/drawers/modules/ModuleDrawerShopOverlay';

const DrawerShopFilter = ({ isFilter }) => {
    const dispatch = useDispatch();
    const ref = useRef(null);

    function handleClose() {
        dispatch(toggleShopFilter(false));
    }

    return (
        <div className={`ps-drawer ${isFilter ? 'active' : ''}`} ref={ref}>
            <div className="ps-drawer__header">
                <button
                    className="ps-drawer__close"
                    onClick={(e) => handleClose()}>
                    <i className="icon-cross"></i>
                </button>
            </div>
            <div className="ps-drawer__wrapper">
                <div className="ps-filter--shop">
                    <WidgetShopFilterSortby />
                    <WidgetShopFilterByColor />
                    <WidgetShopFilterByPriceRange />
                    <WidgetShopFitterByTags />
                </div>
            </div>
        </div>
    );
};

export default connect((state) => state.shop)(DrawerShopFilter);
