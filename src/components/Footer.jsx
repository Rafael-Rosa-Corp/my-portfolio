import styled from 'styled-components';
import polvobackground from '../assets/polvo-background.png'; 


const FooterContainer = styled.footer`
  text-align: center;
  font-size: 0.6rem;
  letter-spacing: 0.05rem;
  padding: 7rem 0 1rem;

  @media (min-width: 1920px) {
    font-size: 1rem; }
  

  
`;

const Footerimg = styled.img`
  max-width: 5rem;
  height: auto;
  margin-bottom: 1rem;
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 1920px) {
    max-width: 10rem; }
`;

export default function Footer() {
  return (
    
    <FooterContainer>
      <Footerimg src={polvobackground} alt="Logo rodapé" />
       {new Date().getFullYear()} - Corp. Pixel. <br></br>Todos os direitos reservados.
    </FooterContainer>
    
  );
}
