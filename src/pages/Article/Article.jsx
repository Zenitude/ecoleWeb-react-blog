import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArticleContainer, ArticleTitle, ArticleBody } from './Article.style';
import useDimension from '../../utils/hooks/useDimension';

export default function Article() {
  const { dimension } = useDimension();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if(location.state === null) {
      navigate('/error-article');
    }
  })
  
  return (
      location.state !== null && (
        <ArticleContainer dimension={dimension}>
            
          <ArticleTitle>
            Votre article : {location.state.title}
          </ArticleTitle>
            
          <ArticleBody>
            {location.state.body}
          </ArticleBody>

        </ArticleContainer>
      )  
  )
}
