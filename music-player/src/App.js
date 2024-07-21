import React, {useState} from 'react';
import Player from './components/Player';
import SongList from './components/SongList';
import './App.css';

const songsData = [
    {id: 1, title: "Song One", artist: "Artist One", url: 'music/song1.mp3'},
    {id: 2, title: "Song Two", artist: "Artist Two", url: 'music/song2.mp3'},
    {id: 3, title: "Song Three", artist: "Artist Three", url: 'music/song3.mp3'}
];

function App() {
    const [currentSong, setCurrentSong] = useState([0]);

    const selectSong = (song) => {
        setCurrentSong(song);
    };

    return (
        <div className="App">
            <h1>Music Player</h1>
            <Player currentSong={currentSong}/>
            <SongList songs={songsData} onSelect={selectSong}/>
        </div>
    );
}

export default App;