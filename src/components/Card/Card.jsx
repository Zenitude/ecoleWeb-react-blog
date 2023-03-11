import { Link } from 'react-router-dom';
import { CardContainer, CardTitle } from './Card.style';

export default function Card({title, body}) {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <Link 
        to={`/article/${title.split(" ").join("-")}`}
        state={{
          title: title,
          body: body
        }}
      >Lire l'article</Link>
    </CardContainer>
  )
}
