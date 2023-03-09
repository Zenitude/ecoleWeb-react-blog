import { useState, useEffect } from 'react';

export default function useFetch(url) {
    const [ posts, setPosts ] = useState();

    useEffect(() => {

        if(!url) return;

        async function fetchData() {
            const response = await fetch(url);
            const datas = await response.json();
            setPosts(datas);
        }
        fetchData();
        
        
    }, [url])

    return { posts }
}