import styled from 'styled-components';
import Reveal from '../components/Reveal';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { FaReact, FaHtml5, FaCss3Alt, FaGithub, FaPython } from 'react-icons/fa';
import { SiNextdotjs, SiExpress } from 'react-icons/si';

const AboutSection = styled.section`
  padding: 6rem 2rem;
  color: ${({ theme }) => theme.text};
  position: relative;
  overflow: hidden;



  @media (min-width: 1920px) {
    padding: 0rem 5rem 6rem 5rem;
    }



  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: -1;
    transform: translateZ(0);
    will-change: transform;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    pointer-events: none;
    opacity: 0.4;
  }

  h2 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 5rem;
    text-shadow: 0 3px 8px rgba(190, 184, 210, 0.18), 0 2px 0 #29262e;
    color: ${({ theme }) => theme.accent};

    @media (max-width: 767px) {
      font-size: 1.8rem;
    }

    @media (min-width: 1920px) {
      font-size: 4rem;
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    text-align: center;

    @media (max-width: 767px) {
      font-size: 1.2rem;
    }

    @media (min-width: 1920px) {
      font-size: 2.5rem;
    }
  }

  .section-divider {
    width: 2rem;
    height: 1px;
    background: ${({ theme }) => theme.text};
    opacity: 0.3;
    margin: 4rem auto 4rem auto;
    border-radius: 0.25rem;
  }

  .skills-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    margin-top: 3rem;

    @media (min-width: 1920px) {
      gap: 5rem;}
  }

  .skills-container div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6.25rem;
    height: 6.25rem;
    transition: transform 0.3s ease, box-shadow 0.3s;
    cursor: pointer;
   
  }

  .skills-container div:hover {
    transform: scale(1.2);
    color: ${({ theme }) => theme.secondary};
    
  }

  /* Glow atrás do ícone SVG */
  .icon-glow {
  color: rgba(235, 234, 234, 0.8); /* cor inicial */
  transition: color 0.3s ease, filter 0.3s ease;
  font-size: 60px;

  @media (min-width: 1920px) {
    font-size: 80px;}

  }

 .skills-container div:hover .icon-glow {
  color: rgba(106, 84, 216, 0.92); /* cor final no hover */
  filter: drop-shadow(0 0 2px rgba(106, 84, 216, 0.69));
}


  .instruction {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    text-align: center;
    margin-top: 3rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.textSecondary || theme.text};
    font-style: italic;
    letter-spacing: 0.07rem;

    @media (min-width: 1920px) {
      font-size: 1.8rem;
    }
  }

  

`;

export default function About() {
  return (
    <Reveal>
      <AboutSection id="about">
        <h2>Sobre Mim</h2>
        <p>
         <strong>Desenvolvedor front-end</strong> com paixão por transformar ideias em <strong>arte.</strong> 
          <br /><br />
          Acredito que todo projeto nasce de um <strong>propósito</strong> — criar soluções com <strong>clareza</strong>, <strong>personalidade</strong> e <strong>significado</strong>.  
          Foi com esse espírito que fundei a <strong>Corporação Pixel</strong>, uma iniciativa voltada à criação de experiências digitais.  
          <br /><br />
          Sigo em evolução constante rumo ao <strong>full stack</strong>, mas acima de tudo, quero construir <strong>experiências</strong>: intuitivas, funcionais e únicas.  
          Um bom site vai além da estética — ele precisa dialogar com quem acessa e quem oferece.  
          <br /><br />
          Utilizo <strong>React</strong> e outras <strong>tecnologias modernas</strong> para tirar ideias do papel com <strong>agilidade</strong> e <strong>intenção</strong>.  
          <br /><br />
          Sou movido por <strong>boas conversas</strong>, <strong>café forte</strong> e o desafio de <strong>resolver problemas</strong>.  
          No fim das contas, é o <strong>porquê por trás do código</strong> que faz tudo valer a pena.

        </p>

        <div className="section-divider" />

        <h2>Minhas Habilidades</h2>
        <div className="instruction">Passe o mouse ou toque nos ícones para saber mais.</div>
        <div className="skills-container">
          <div data-tooltip-id="react-tooltip" data-tooltip-content="Desenvolvimento de interfaces dinâmicas e interativas com React">
            <FaReact className="icon-glow" />
          </div>
          <div data-tooltip-id="react-tooltip" data-tooltip-content="Criação de páginas estáticas com HTML5">
            <FaHtml5 className="icon-glow" />
          </div>
          <div data-tooltip-id="react-tooltip" data-tooltip-content="Estilização de páginas web com CSS3 e pré-processadores">
            <FaCss3Alt className="icon-glow" />
          </div>
          <div data-tooltip-id="react-tooltip" data-tooltip-content="Controle de versões e colaboração usando GitHub">
            <FaGithub className="icon-glow" />
          </div>
          <div data-tooltip-id="react-tooltip" data-tooltip-content="Análise de dados e algoritmos de clustering com Python (ex: K-Means)">
            <FaPython  className="icon-glow" />
          </div>
          <div data-tooltip-id="react-tooltip" data-tooltip-content="Desenvolvimento de aplicações full stack com Next.js (React SSR/SSG)">
            <SiNextdotjs  className="icon-glow" />
          </div>
          <div data-tooltip-id="react-tooltip" data-tooltip-content="APIs e back-end com Express.js (Node.js)">
            <SiExpress  className="icon-glow" />
          </div>
        </div>

        
        <ReactTooltip id="react-tooltip" place="top" effect="solid" className="custom-tooltip" />
      </AboutSection>
    </Reveal>
  );
}