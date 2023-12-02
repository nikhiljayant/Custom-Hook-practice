// CUSTOM HOOK
import React, { useEffect, useState } from 'react'
import axios from "axios"

const API_KEY = "NWo4iVJzDw7ZHF2ami2rn8D1T1821o6N";

const useGif = (tag) => {
    const [gif, setGif] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    async function fetchData(tag) {
        setIsLoading(true);
        try {
        const { data } = await axios.get(tag ? tagMemeUrl : randomMemeUrl);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        } catch (error) {
        console.log("Error: ", error);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);
    
    return { gif, isLoading, fetchData };
}

export default useGif