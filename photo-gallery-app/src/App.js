import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import PhotoList from './components/PhotoList';

function App() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await axios.get('https://api.unsplash.com/photos', {
                    params: {per_page: 10},
                    headers: {
                        Authorization: 'Client-ID _kPF1s2Bo30uNehjXa4u_wbKss7x612Xcbicpz1ks6A',
                    },
                });
                setPhotos(response.data);
            } catch (error) {
                console.error('Error fetching photos:', error);
            }
        };
        fetchPhotos();
    }, []);

    return (
        <div className="App">
            <h1>Photo Gallery</h1>
            <PhotoList photos={photos}/>
        </div>
    );
}

export default App;