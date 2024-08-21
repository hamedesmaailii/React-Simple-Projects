import React from 'react';

function PhotoItem({photo}) {
    return (
        <div className="photo-item">
            <img src={photo.urls.small} alt={photo.alt_description}/>
            <p>{photo.description || 'No description available'}</p>
        </div>
    );
}

export default PhotoItem;