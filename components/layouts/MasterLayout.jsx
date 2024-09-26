import React, { useEffect } from 'react';
import { BackTop } from 'antd';
import ModuleCustomHead from '~/components/layouts/modules/ModuleCustomHead';
import HeaderMobile from '~/components/shared/mobiles/HeaderMobile';
import { connect, useDispatch } from 'react-redux';
import { getCart } from '~/store/cart/action';
import DrawerDefault from '~/components/shared/drawers/DrawerDefault';
import ModuleDrawerOverlay from '~/components/shared/drawers/modules/ModuleDrawerOverlay';
import ModuleDrawerShopOverlay from '~/components/shared/drawers/modules/ModuleDrawerShopOverlay';
import { getWishlistList } from '~/store/wishlist/action';
import { useRouter } from 'next/router';
import { toggleDrawer } from '~/store/app/action';
import { Html } from 'next/document';

const MasterLayout = ({ children }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    useEffect(() => {
        const handleComplete = () => {
            dispatch(toggleDrawer(false));
        };
        dispatch(getCart());
        dispatch(getWishlistList());
        router.events.on('routeChangeStart', handleComplete);
        setTimeout(function () {
            document.getElementById('__next').classList.add('ps-loaded');
        }, 100);

        return () => {
            router.events.off('routeChangeStart', handleComplete);
        };
    }, []);

    return (
        <div className="ps-app-root">
            <HeaderMobile />
            <ModuleCustomHead />
            {children}
            <div id="loader-wrapper">
                <div className="loader-section section-left"></div>
                <div className="loader-section section-right"></div>
            </div>

            <DrawerDefault />
            <ModuleDrawerOverlay />
            <ModuleDrawerShopOverlay />
            <BackTop>
                <button className="ps-btn--backtop">
                    <i className="icon-arrow-up"></i>
                </button>
            </BackTop>
        </div>
    );
};

export default connect()(MasterLayout);
