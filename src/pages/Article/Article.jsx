import React from 'react';
import { useLocation } from 'react-router-dom';
import { ArticleContainer, ArticleTitle, ArticleBody } from './Article.style';
import useDimension from '../../utils/hooks/useDimension';

export default function Article() {
  const { dimension } = useDimension();
  const location = useLocation();

  return (
      <ArticleContainer dimension={dimension}>
            
        <ArticleTitle>
          Votre article : {location.state.title}
        </ArticleTitle>
            
        <ArticleBody>
          {location.state.body}
        </ArticleBody>

      </ArticleContainer>
      
  )
}
