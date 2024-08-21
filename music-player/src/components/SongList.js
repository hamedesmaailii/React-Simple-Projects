import React from 'react';
import Song from './Song';

function SongList({songs, onSelect}) {
    return (
        <div className="song-list">
            {songs.map((song) => (
                <Song key={song.id} song={song} onSelect={onSelect}/>
            ))}
        </div>
    );
}

export default SongList;