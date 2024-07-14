import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await axios.get('https://api.unsplash.com/photos', {
                    params: {per_page: 10},
                    headers: {Authorization: }
                })
            }
        }
    }, []);

    return (
        <div className="App">

        </div>
    );
}

export default App;
