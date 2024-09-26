import React, { useEffect } from 'react';
import { stickyHeader } from '~/utilities/common-helpers';
import FormSearchHeader from '~/components/shared/forms/FormSearchHeader';
import ModuleHeaderActions from '~/components/shared/headers/modules/ModuleHeaderActions';
import Logo from '~/components/elements/basic/Logo';
import Menu from '~/components/elements/menu/Menu';
import { main_menu } from '~/public/static/data/menu.json';

const HeaderDefault = ({ grid, fullwidth }) => {
    useEffect(() => {
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
    }, []);

    if (grid) {
        return (
            <header
                className="header header--boxed header--standard-grid"
                id="header-sticky">
                <div className="container header__bottom">
                    <div className="header__left">
                        <Logo />
                    </div>
                    <div className="header__right">
                        <div className="header__navigation">
                            <Menu data={main_menu} className="menu" />
                        </div>
                        <div className="header__container">
                            <div className="header__search">
                                <FormSearchHeader />
                                <a className="header__search-mini" href="#">
                                    <i className="icon-magnifier"></i>
                                </a>
                            </div>
                            <ModuleHeaderActions />
                        </div>
                    </div>
                </div>
            </header>
        );
    } else if (fullwidth) {
        return (
            <header
                className="header header--standard-fullwidth"
                id="header-sticky">
                <div className="header__top">
                    <figure>
                        <p>
                            <i className="icon-paper-plane"></i> FREE SHIPPING
                            for all orders over <strong>$199</strong>
                        </p>
                    </figure>
                    <figure className="header__top-right">
                        <a href="#">Track your order</a>
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
                            <ul className="ps-list--social">
                                <li>
                                    <a href="#">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-google"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-youtube"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </figure>
                </div>
                <div className="header__bottom">
                    <div className="header__left">
                        <Logo />
                    </div>
                    <div className="header__right">
                        <div className="header__navigation">
                            <Menu data={main_menu} className="menu" />
                        </div>
                        <div className="header__container">
                            <div className="header__search">
                                <FormSearchHeader />
                                <a className="header__search-mini" href="#">
                                    <i className="icon-magnifier"></i>
                                </a>
                            </div>
                            <ModuleHeaderActions />
                        </div>
                    </div>
                </div>
            </header>
        );
    } else {
        return (
            <header className="header header--standard" id="header-sticky">
                <div className="header__left">
                    <Logo />
                </div>
                <div className="header__right">
                    <div className="header__navigation">
                        <Menu data={main_menu} className="menu" />
                    </div>
                    <div className="header__container">
                        <div className="header__search">
                            <FormSearchHeader />
                            <a className="header__search-mini" href="#">
                                <i className="icon-magnifier"></i>
                            </a>
                        </div>
                        <ModuleHeaderActions />
                    </div>
                </div>
            </header>
        );
    }
};

export default HeaderDefault;
