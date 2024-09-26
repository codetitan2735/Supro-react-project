import React from 'react';
import WidgetFooterHelpAndInformation from '~/components/shared/widgets/WidgetFooterHelpAndInformation';
import WidgetFooterAbout from '~/components/shared/widgets/WidgetFooterAbout';
import WidgetFooterOnlineShop from '~/components/shared/widgets/WidgetFooterOnlineShop';
import WidgetFooterLanguage from '~/components/shared/widgets/WidgetFooterLanguage';
import WidgetFooterCurrency from '~/components/shared/widgets/WidgetFooterCurrency';
import Link from 'next/link';
import { baseUrl } from '~/repositories/Repository';
import ListSocial from '~/components/elements/lists/ListSocial';
import ModuleFooterPaymentMethods from '~/components/shared/footers/modules/ModuleFooterPaymentMethods';

const FooterModerm = () => {
    return (
        <footer
            className="ps-footer--2 ps-footer--payment-methods has-bg bg--top-left"
            style={{
                backgroundImage: `url(/static/img/bg/home-moderm/footer.jpg)`,
            }}>
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
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                            <p className="ps-footer__copyright">
                                &copy; 2019 <strong>Supro</strong>. All rights
                                reserved.
                            </p>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 ">
                            <ListSocial more={true} />
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 ">
                            <ModuleFooterPaymentMethods />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterModerm;
