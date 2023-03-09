import React from 'react';
import { ContactContainer, ContactTitle } from './Contact.style';

export default function Contact() {
  return (
    <ContactContainer>
      <ContactTitle>Contactez-nous</ContactTitle>
      <p>par mail : blogreact@gmail.com</p>
      <p>par téléphone : XX-XX-XX-XX-XX</p>
      <p>Rejoignez-nous sur les réseaux :</p>
      <ul>
        <li>Facebook</li>
        <li>Twitter</li>
        <li>Youtube</li>
      </ul>

    </ContactContainer>
  )
}
