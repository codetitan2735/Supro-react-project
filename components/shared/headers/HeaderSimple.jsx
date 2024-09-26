import React, { useEffect } from 'react';
import { stickyHeader } from '~/utilities/common-helpers';
import FormSearchHeader from '~/components/shared/forms/FormSearchHeader';
import ModuleHeaderActions from '~/components/shared/headers/modules/ModuleHeaderActions';
import Logo from '~/components/elements/basic/Logo';
const HeaderSimple = () => {
    useEffect(() => {
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
    }, []);

    return (
        <header className="header header--simple" id="header-sticky">
            <div className="header__left">
                <Logo />
            </div>
            <div className="header__right">
                <div className="header__search">
                    <FormSearchHeader />
                    <a className="header__search-mini" href="#">
                        <i className="icon-magnifier"></i>
                    </a>
                </div>
                <div className="header__container">
                    <ModuleHeaderActions />
                </div>
            </div>
        </header>
    );
};

export default HeaderSimple;
