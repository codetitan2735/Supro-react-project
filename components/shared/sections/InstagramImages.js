import React from 'react';
import Slider from 'react-slick';

const InstagramImages = () => {
    const carouselSetting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
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
            image: '/static/img/instagram/1.jpg',
        },
        {
            id: 2,
            image: '/static/img/instagram/2.jpg',
        },
        {
            id: 3,
            image: '/static/img/instagram/3.jpg',
        },
        {
            id: 4,
            image: '/static/img/instagram/4.jpg',
        },
        {
            id: 5,
            image: '/static/img/instagram/5.jpg',
        },
        {
            id: 6,
            image: '/static/img/instagram/6.jpg',
        },
        {
            id: 7,
            image: '/static/img/instagram/6.jpg',
        },
    ];
    return (
        <div className="ps-section--instagram">
            <Slider {...carouselSetting} className="ps-carousel">
                {imageItems.map((item) => (
                    <div className="slide-item" key={item.id}>
                        <div className="ps-block--instagram">
                            <img src={item.image} alt="" />
                            <a href="#">
                                <i className="fa fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default InstagramImages;
