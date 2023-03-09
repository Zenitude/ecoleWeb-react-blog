import React, { useContext } from 'react';
import { TitleHome, ContainerArticles } from './Home.style';
import Card from '../../components/Card/Card';
import { PostsContext } from '../../utils/context/context';

export default function Home() {
    const { articles } = useContext(PostsContext);

    return (
        <>
            <TitleHome>Tous les articles</TitleHome>
            <ContainerArticles>
                {
                    articles !== undefined && 
                    (
                        articles.sort((a,b) => b.id - a.id).map(post => (
                                 <Card key={post.id} title={post.title} body={post.body}/>
                        ))
                    )
                }
            </ContainerArticles>
        </>
    )
}
