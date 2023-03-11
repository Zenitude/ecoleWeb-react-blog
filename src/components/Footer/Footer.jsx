import { FooterContainer } from './Footer.style';

export default function Footer() {
  return (
    <FooterContainer>
      <p>&copy; <span>{new Date().getFullYear()}</span> Blog</p>
    </FooterContainer>
  )
}
