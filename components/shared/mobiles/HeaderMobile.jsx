import React, { useEffect } from 'react';
import Logo from '~/components/elements/basic/Logo';
import { toggleDrawer } from '~/store/app/action';
import { useDispatch } from 'react-redux';
import { stickyHeaderModile } from '~/utilities/common-helpers';
import ModuleHeaderActions from '~/components/shared/headers/modules/ModuleHeaderActions';

const HeaderMobile = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (process.browser) {
            window.addEventListener('scroll', stickyHeaderModile);
        }
    }, []);
    return (
        <header
            className="header header--mobile"
            data-sticky="true"
            id="header-sticky-mobile">
            <div className="header__left">
                <Logo />
            </div>

            <div className="header__right">
                <div className="header__container">
                    <a className="header__search-mini" href="#">
                        <i className="icon-magnifier"></i>
                    </a>
                </div>
                <ModuleHeaderActions />
            </div>
        </header>
    );
};

export default HeaderMobile;
