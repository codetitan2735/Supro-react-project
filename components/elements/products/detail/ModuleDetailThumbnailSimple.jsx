import React, { useEffect, useState } from 'react';
import NextArrow from '~/components/elements/carousel/NextArrow';
import PrevArrow from '~/components/elements/carousel/PrevArrow';
import Slider from 'react-slick';
import StrapiProductImage from '~/components/elements/media/StrapiProductImage';

const ModuleDetailThumbnailSimple = ({ product }) => {
    const [images, setImages] = useState(null);

    useEffect(() => {
        if (product.images && product.images.length > 0) {
            setImages(product.images);
        }
    }, [product]);
    const gallerySetting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    // imagesView;
    let imagesView;
    if (images && images.length > 0) {
        imagesView = images.map((item) => {
            return (
                <div className="carousel-item" key={item.id}>
                    <StrapiProductImage url={item.url} />
                </div>
            );
        });
    }
    return (
        <div className="ps-product__thumbnail" data-vertical="false">
            <figure>
                <Slider
                    {...gallerySetting}
                    className="ps-product__gallery ps-carousel inside">
                    {imagesView}
                </Slider>
            </figure>

            {/*{isOpen && (
                    <Lightbox
                        mainSrc={lightboxImages[photoIndex]}
                        nextSrc={
                            lightboxImages[
                                (photoIndex + 1) % lightboxImages.length
                            ]
                        }
                        prevSrc={
                            lightboxImages[
                                (photoIndex + lightboxImages.length - 1) %
                                    lightboxImages.length
                            ]
                        }
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex:
                                    (photoIndex + lightboxImages.length - 1) %
                                    lightboxImages.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex:
                                    (photoIndex + 1) % lightboxImages.length,
                            })
                        }
                    />
                )}*/}
        </div>
    );
};

export default ModuleDetailThumbnailSimple;
