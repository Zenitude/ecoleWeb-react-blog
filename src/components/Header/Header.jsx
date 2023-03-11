import { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { HeaderContainer, Navigation, NavigationLink, BurgerMenu } from './Header.style';
import useDimension from '../../utils/hooks/useDimension';

export default function Header() {
    const [ toggle, setToggle ] = useState(false);
    const { dimension } = useDimension();

  return (
    <HeaderContainer toggle={toggle}>
      { (toggle || dimension > 400) &&
        (<Navigation dimension={dimension}>
            <NavigationLink dimension={dimension} to={'/'} style={({isActive}) => isActive ? {fontWeight: 'bold'} : {fontWeight: 'normal'}}>Accueil</NavigationLink>
            <NavigationLink dimension={dimension} to={'/write'} style={({isActive}) => isActive ? {fontWeight: 'bold'} : {fontWeight: 'normal'}}>Écrire</NavigationLink>
            <NavigationLink dimension={dimension} to={'/contact'} style={({isActive}) => isActive ? {fontWeight: 'bold'} : {fontWeight: 'normal'}}>Contact</NavigationLink>
        </Navigation>)
      }
      { dimension < 400 &&
        (<BurgerMenu onClick={() => setToggle(!toggle)}><CiMenuBurger /></BurgerMenu>)}
    </HeaderContainer>
  )
}
