import React from 'react';
import AboutIntro from '~/components/partials/pages/about-us/AboutIntro';
import AboutQuote from '~/components/partials/pages/about-us/AboutQuote';
import AboutMoments from '~/components/partials/pages/about-us/AboutMoments';
import AboutVideo from '~/components/partials/pages/about-us/AboutVideo';
import AboutLeadership from '~/components/partials/pages/about-us/AboutLeadership';
import SitePartners from '~/components/shared/sections/SitePartners';
import ContainerPage from '~/components/layouts/ContainerPage';

const AboutUsPage = () => {
    return (
        <ContainerPage title="About us">
            <div className="ps-page ps-page--about">
                <AboutIntro />
                <AboutQuote />
                <AboutMoments />
                <AboutVideo />
                <AboutLeadership />
                <SitePartners />
            </div>
        </ContainerPage>
    );
};

export default AboutUsPage;
