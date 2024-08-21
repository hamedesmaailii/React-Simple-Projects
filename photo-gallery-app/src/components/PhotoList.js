import React from 'react';
import PhotoItem from './PhotoItem';

function PhotoList({photos}) {
    return (
        <div className="photo-list">
            {photos.map(photo => (
                <PhotoItem key={photo.id} photo={photo}/>
            ))}
        </div>
    );
}

export default PhotoList;