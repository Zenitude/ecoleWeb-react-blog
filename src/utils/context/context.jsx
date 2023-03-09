import { createContext, useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';

export const PostsContext = createContext();

function PostsProvider(props) {
    const [ articles, setArticles ] = useState();
    const { posts } = useFetch('https://jsonplaceholder.typicode.com/posts');

    useEffect(() => {
        setArticles(posts);
    }, [posts])

    return (
        <PostsContext.Provider value={{articles, setArticles}}>
            {props.children}
        </PostsContext.Provider>
    )

}

export default PostsProvider;