import React from 'react';
import { ErrorContainer, ErrorParagraph, ErrorLink } from './Error.style';
import { ReactComponent as SVG404 } from '../../assets/404.svg';

export default function Error() {
  return (
    <ErrorContainer>
        <SVG404 />
        <ErrorParagraph>Oups! La page que vous demandez n'existe pas.</ErrorParagraph>
        <ErrorLink to='/'>Retourner sur la page d'accueil</ErrorLink>
    </ErrorContainer>
  )
}
