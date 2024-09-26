import React from 'react';
import NextArrow from '~/components/elements/carousel/NextArrow';
import PrevArrow from '~/components/elements/carousel/PrevArrow';
import Slider from 'react-slick';

const SitePartners = () => {
    const carouselSetting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    const imageItems = [
        {
            id: 1,
            image: '/static/img/partners/1.png',
        },
        {
            id: 2,
            image: '/static/img/partners/2.png',
        },
        {
            id: 3,
            image: '/static/img/partners/3.png',
        },
        {
            id: 4,
            image: '/static/img/partners/4.png',
        },
        {
            id: 5,
            image: '/static/img/partners/5.png',
        },
        {
            id: 6,
            image: '/static/img/partners/6.png',
        },
    ];

    return (
        <div className="ps-site-partners">
            <div className="container">
                <Slider {...carouselSetting} className="ps-carousel">
                    {imageItems.map((item) => (
                        <div className="slide-item" key={item.id}>
                            <a href="#">
                                <img src={item.image} alt="" />
                            </a>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default SitePartners;
