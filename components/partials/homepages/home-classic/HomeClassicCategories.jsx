import React from 'react';
import NextArrow from '~/components/elements/carousel/NextArrow';
import PrevArrow from '~/components/elements/carousel/PrevArrow';
import Slider from 'react-slick';

const HomeClassicCategories = () => {
    const carouselSetting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };
    return (
        <div className="ps-home-categories">
            <div className="container">
                <Slider {...carouselSetting} className="ps-carousel">
                    <div className="ps-block--category">
                        <div className="ps-block__thumbnail">
                            <a className="ps-block__overlay" href="#"></a>
                            <img
                                src="/static/img/homepage/home-classic/category-1.png"
                                alt=""
                            />
                        </div>
                        <div className="ps-block__content">
                            <p>Unique</p>
                            <a href="#">Shoes</a>
                        </div>
                    </div>
                    <div className="ps-block--category">
                        <div className="ps-block__thumbnail">
                            <a className="ps-block__overlay" href="#"></a>
                            <img
                                src="/static/img/homepage/home-classic/category-2.png"
                                alt=""
                            />
                        </div>
                        <div className="ps-block__content">
                            <p>Special</p>
                            <a href="#">Bags</a>
                        </div>
                    </div>
                    <div className="ps-block--category">
                        <div className="ps-block__thumbnail">
                            <a className="ps-block__overlay" href="#"></a>
                            <img
                                src="/static/img/homepage/home-classic/category-3.png"
                                alt=""
                            />
                        </div>
                        <div className="ps-block__content">
                            <p>Beautiful</p>
                            <a href="#">Accessories</a>
                        </div>
                    </div>
                    <div className="ps-block--category">
                        <div className="ps-block__thumbnail">
                            <a className="ps-block__overlay" href="#"></a>
                            <img
                                src="/static/img/homepage/home-classic/category-4.png"
                                alt=""
                            />
                        </div>
                        <div className="ps-block__content">
                            <p>Trendy</p>
                            <a href="#">Clothing</a>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default HomeClassicCategories;
