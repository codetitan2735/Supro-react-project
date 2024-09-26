import React from 'react';
import ModuleHeaderActions from '~/components/shared/headers/modules/ModuleHeaderActions';
import FormSearchHeader from '~/components/shared/forms/FormSearchHeader';
import Logo from '~/components/elements/basic/Logo';
import ListSocial from '~/components/elements/lists/ListSocial';

const HeaderBoxed = () => {
    return (
        <header className="header header--boxed" data-sticky="true">
            <div className="header__top">
                <figure>
                    <p>
                        <i className="icon-paper-plane"></i> FREE SHIPPING for
                        all orders over $199
                    </p>
                </figure>
                <figure className="header__top-right">
                    <div className="header__feature">
                        <select className="ps-select form-control">
                            <option value="1">USD</option>
                            <option value="2">GBP</option>
                        </select>
                    </div>
                    <div className="header__feature">
                        <select className="ps-select form-control">
                            <option value="1">English</option>
                            <option value="2">Japanese</option>
                            <option value="3">Chinese</option>
                        </select>
                    </div>
                    <div className="header__feature">
                        <ListSocial more={true} />
                    </div>
                </figure>
            </div>
            <div className="header__bottom">
                <div className="header__left">
                    <Logo />
                </div>
                <div className="header__right">
                    <div className="header__navigation"></div>
                    <div className="header__container">
                        <div className="header__search">
                            <FormSearchHeader />
                        </div>
                        <ModuleHeaderActions />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderBoxed;
