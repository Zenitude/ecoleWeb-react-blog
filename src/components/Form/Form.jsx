import { useState, useContext } from 'react';
import { PostsContext } from '../../utils/context/context';
import { FormContainer, Container, FormLabel, FormInput, FormMessage, FormButton } from './Form.style';

export default function Form() {
    const [ article, setArticle ] = useState({
        title: '',
        body: '',
    });
    const { articles, setArticles } = useContext(PostsContext);

    function valuesInputs(e) {
        if(e.target.getAttribute('id') === 'title') {
            const newObj = { ...article, title: e.target.value}
            setArticle(newObj);
        } else if(e.target.getAttribute('id') === 'message') {
            const newObj = { ...article, body: e.target.value}
            setArticle(newObj);
        }
    }

    function submitForm(e) {
        e.preventDefault();
        const newArticle = { userId: 11, id: articles.length + 1, ...article };
        const datas = [...articles, newArticle];
        setArticles(datas);
        setArticle({
            title: '',
            body: '',
        })
    }

    return (
        <FormContainer onSubmit={submitForm}>
            <Container>
                <FormLabel htmlFor='title'>Titre</FormLabel>
                <FormInput 
                    type='text' 
                    name='title' 
                    id='title'
                    onChange={valuesInputs} 
                    value={article.title}
                    placeholder='Entrez votre nom'
                    required
                />
            </Container>
            <Container>
                <FormLabel htmlFor='message'>Votre article</FormLabel>
                <FormMessage 
                    name='message' 
                    id='message' 
                    cols={30} 
                    rows={10} 
                    onChange={valuesInputs}
                    value={article.body}
                    placeholder='Votre article'
                    required
                ></FormMessage>
            </Container>
            <FormButton>Envoyer l'article</FormButton>
        </FormContainer>
    )
}
