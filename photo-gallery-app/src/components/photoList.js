import React from 'react';
import photoItem from './photoItem';

function photoList({photos}) {
    return (
        <div className="photo-list">
            {photos.map(photo => (
                <photoItem key={photo.id} photo={photo}/>
            ))};
        </div>
    );
}

export default photoList;