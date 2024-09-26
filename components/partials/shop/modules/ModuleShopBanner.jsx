import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import NextArrow from '~/components/elements/carousel/NextArrow';
import PrevArrow from '~/components/elements/carousel/PrevArrow';

const ModuleShopBanner = () => {
    const carouselSetting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <Slider {...carouselSetting} className="ps-carousel slick-slider mb-30">
            <div className="slide-item">
                <div
                    className="ps-banner--shop bg--cover"
                    style={{
                        background: `url(/static/img/banner/shop/shop-banner-1.jpg)`,
                    }}>
                    <div className="ps-banner__content">
                        <span>NEW ARRIVAL</span>
                        <h3>
                            Brown Color For <br /> Autumn
                        </h3>
                        <Link href="/shop">
                            <a className="ps-link--under">Discover more</a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="slide-item">
                <div
                    className="ps-banner--shop bg--cover white"
                    style={{
                        background: `url(/static/img/banner/shop/shop-banner-2.jpg)`,
                    }}>
                    <div className="ps-banner__content">
                        <span>Best Seller</span>
                        <h3>
                            Contrasting <br /> Sneaker
                        </h3>
                        <Link href="/shop">
                            <a className="ps-link--under">Discover more</a>
                        </Link>
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default ModuleShopBanner;
