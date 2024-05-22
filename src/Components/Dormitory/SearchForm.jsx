// src/Components/Dormitory/SearchForm.jsx
import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
    const [location, setLocation] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [amenities, setAmenities] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({ location, priceRange, amenities });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Location:</label>
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
            </div>
            <div>
                <label>Price Range:</label>
                <input
                    type="text"
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                />
            </div>
            <div>
                <label>Amenities:</label>
                <input
                    type="text"
                    value={amenities}
                    onChange={(e) => setAmenities(e.target.value)}
                />
            </div>
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchForm;
