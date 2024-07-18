import React, {useState} from 'react';

function ImageSearch({searchImages}) {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        searchImages(query);
    };

    return (
        <form onSubmit={handleSubmit} className="image-search">
            <input
                type="text"
                placeholder="Search images..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default ImageSearch;