import React from 'react';

function ImageGallery({images}) {
    return (
        <div className="image-gallery">
            {images.map(image => (
                <div key={image.id} className="image-item">
                    <img src={image.urls.small} alt={image.alt_description}/>
                </div>
            ))}
        </div>
    );
}

export default ImageGallery;