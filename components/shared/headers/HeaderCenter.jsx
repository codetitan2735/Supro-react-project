import React, { useEffect } from 'react';
import Logo from '~/components/elements/basic/Logo';
import FormSearchHeader from '~/components/shared/forms/FormSearchHeader';
import ModuleHeaderActions from '~/components/shared/headers/modules/ModuleHeaderActions';
import { stickyHeader } from '~/utilities/common-helpers';

const HeaderCenter = () => {
    useEffect(() => {
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
    }, []);

    return (
        <header className="header header--center" id="header-sticky">
            <div className="container">
                <div className="header__left">
                    <div className="header__search">
                        <FormSearchHeader />
                        <a className="header__search-mini" href="#">
                            <i className="icon-magnifier"></i>
                        </a>
                    </div>
                </div>
                <div className="header__center">
                    <Logo />
                </div>
                <div className="header__right">
                    <div className="header__container">
                        <ModuleHeaderActions />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderCenter;
