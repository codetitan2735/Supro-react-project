import React from 'react';
import WidgetShopProducts from '~/components/shared/widgets/WidgetShopProducts';
import WidgetShopCategories from '~/components/shared/widgets/WidgetShopCategories';
import WidgetBlogPromotions from '~/components/shared/widgets/WidgetBlogPromotions';

const ModuleSidebarShop = () => {
    return (
        <div className="ps-shop__sidebar">
            <WidgetShopCategories />
            <WidgetShopProducts />
            <WidgetBlogPromotions />
        </div>
    );
};

export default ModuleSidebarShop;
