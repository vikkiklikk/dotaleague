import { useState, useEffect } from 'react';

const useFavorites = () => {
    const [favorites, setFavorites] = useState<string[]>(() => {
        const saved = localStorage.getItem('favorites');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (item: string) => {
        setFavorites((prevFavorites) => [...prevFavorites, item]);
    };

    const removeFavorite = (item: string) => {
        setFavorites((prevFavorites) => prevFavorites.filter(favorite => favorite !== item));
    };

    const isFavorite = (item: string) => {
        return favorites.includes(item);
    };

    return { favorites, addFavorite, removeFavorite, isFavorite };
};

export default useFavorites;