import React, {useEffect, useRef, useState} from 'react';

function Player({currentSong}) {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        audio.load();

        const handleCanPlay = () => {
            if (isPlaying) {
                audio.play();
            }
        };

        const handleEnded = () => {
            setIsPlaying(false);
        }

        audio.addEventListener('canplay', handleCanPlay);
        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('canPlay', handleCanPlay);
            audio.removeEventListener('ended', handleEnded);
        };
    }, [isPlaying, currentSong]);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="player">
            <h3>Now Playing: {currentSong.title}</h3>
            <p>{currentSong.artist}</p>
            <audio ref={audioRef} src={currentSong.url}></audio>
            <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
        </div>
    );
}

export default Player;