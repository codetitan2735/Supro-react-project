import React from 'react';
import WidgetFooterHelpAndInformation from '~/components/shared/widgets/WidgetFooterHelpAndInformation';
import WidgetFooterAbout from '~/components/shared/widgets/WidgetFooterAbout';
import WidgetFooterOnlineShop from '~/components/shared/widgets/WidgetFooterOnlineShop';
import WidgetFooterLanguage from '~/components/shared/widgets/WidgetFooterLanguage';
import WidgetFooterCurrency from '~/components/shared/widgets/WidgetFooterCurrency';
import Link from 'next/link';

const FooterDefault = () => (
    <footer className="ps-footer--2 ps-footer--fullwidth">
        <div className="container">
            <div className="ps-footer__content">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 ">
                        <WidgetFooterHelpAndInformation />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 ">
                        <WidgetFooterAbout />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 ">
                        <WidgetFooterOnlineShop />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 ">
                        <WidgetFooterLanguage />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 ">
                        <WidgetFooterCurrency />
                    </div>
                </div>
            </div>
        </div>
        <div className="ps-footer__bottom">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-4 col-md-6 col-sm-6 col-12 ">
                        <p className="ps-footer__copyright">
                            &copy;  2021 <strong>Supro</strong>. All rights
                            reserved
                        </p>
                    </div>
                    <div className="col-xl-6 col-lg-4 col-md-12 col-sm-12 col-12 ">
                        <p className="ps-footer__links">
                            <Link href="/">
                                <a className="ps-link--line">Privacy Policy</a>
                            </Link>
                            <Link href="/">
                                <a className="ps-link--line">Term of Use</a>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default FooterDefault;
