import React, {useState} from 'react';
import axios from 'axios';
import './App.css';
import ImageSearch from './components/ImageSerach';
import ImageGallery from './components/ImageGallery';

function App() {
    const [image, setImage] = useState([]);

    const searchImage = async (query) => {
        const response = await axios.get(`https://api.unsplash.com/search/photos`, {
            params: {query},
            headers: {
                Authorization: 'Client-ID LgQqlFgLfOwNbzQabTlplmWa8ahHmD1vumWPE3PR3-4'
            }
        });
        setImage(response.data.results);
    };

    return (
        <div className="App">
            <h1>Image Gallery</h1>
            <ImageSearch searchImages={searchImages}/>
            <ImageGallery images={images}/>
        </div>
    );
}

export default App;
