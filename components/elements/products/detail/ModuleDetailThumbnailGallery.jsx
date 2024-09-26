import React, { useEffect, useState } from 'react';
import StrapiProductImage from '~/components/elements/media/StrapiProductImage';

const ModuleDetailThumbnailGallery = ({ product }) => {
    const [images, setImages] = useState(null);

    useEffect(() => {
        if (product.images && product.images.length > 0) {
            setImages(product.images);
        }
    }, [product]);

    // imagesView;
    let imagesView;
    if (images && images.length > 0) {
        imagesView = images.map((item) => {
            return (
                <div className="col-sm-6">
                    <StrapiProductImage url={item.url} />
                </div>
            );
        });
    }

    return (
        <div className="ps-product__thumbnail">
            <div className="ps-gallery--image">
                <div className="row">{imagesView}</div>
            </div>
        </div>
    );
};

export default ModuleDetailThumbnailGallery;
