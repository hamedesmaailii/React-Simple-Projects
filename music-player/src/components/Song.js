import React from 'react';

function Song({song, onSelect}) {
    return (
        <div className="song" onClick={() => onSelect(song)}>
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
        </div>
    );
}

export default Song;