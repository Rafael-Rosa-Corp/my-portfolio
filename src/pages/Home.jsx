import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import avatar from '../assets/avatar.png';
import Reveal from '../components/Reveal';
import { FaChevronDown } from 'react-icons/fa';
import { gsap } from 'gsap';

// --- Estilos ---


const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7rem 2rem 0;
  margin-top: 3rem;
  overflow-x: hidden;
  position: relative;
  padding-bottom: 5rem;

  @media (min-width: 821px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8rem;
    padding: 6rem 7rem 0;
  }

  @media (min-width: 1024px) and (max-width: 1024.9px) {
    flex-direction: column;
    align-items: center;
    gap: 6rem;
    padding: 6rem 7rem 0;
  }

  @media (min-width: 1700px) {
    gap: 20rem; 
    margin-top: 10rem;
  }

  @media (min-width: 1919px) {
    gap: 30rem; 
    margin-bottom: 20rem;
  }

  @media (min-width: 1920px) {
    gap: 120px;
    margin-left: 170px;}

  /* Celulares muito pequenos */
  @media (max-width: 360px) {
    padding: 3rem 1rem 0;
    margin-top: 2rem;
    gap: 1rem;
  }

  /* Celulares padrão */
  @media (max-width: 430px) {
    padding: 4rem 1.5rem 0;
    margin-top: 2.5rem;
    gap: 2.5rem;
  }

  /* Celulares grandes */
  @media (max-width: 767px) {
    padding: 4rem 2rem 0;
    gap: 2rem;
  }

  
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const Avatar = styled.img`
  flex: 1;
  width: 400px;
  max-width: 400px;
  height: auto;
  object-fit: contain;
  animation: ${bounce} 5s infinite;

  @media (max-width: 350px) {
    max-width: 180px;
  }

  @media (min-width: 351px) and (max-width: 360px) {
    max-width: 180px;
  }

  @media (min-width: 361px) and (max-width: 429px) {
    max-width: 220px;
  }

  @media (min-width: 430px) and (max-width: 767px) {
    max-width: 250px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 20rem;
    margin-top: 50px;
  }

  @media (min-width: 1920px) {
    max-width: 550px;
   
  }
`;

const Content = styled.div`
  flex: 1;
  
  text-align: center;
  z-index: 1;
  min-height: 320px;

  @media (min-width: 768px) {
    margin-top: 6rem;
  }

  @media (max-width: 767px) {
    padding: 0 8vw;
    margin-top: 2rem;
  }
`;

const StyledH1 = styled.h1`
  color: ${({ theme }) => theme.accent};
  text-shadow: 0 3px 8px rgba(207, 202, 222, 0.18), 0 2px 0 #29262e;
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 4rem;
  min-height: 4rem;

  @media (max-width: 360px) {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
    width: 280px;
  }

  @media (min-width: 361px) and (max-width: 429px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    width: 320px;
    
  }

  @media (min-width: 430px) and (max-width: 767px) {
    font-size: 2rem;
    margin-bottom: 2.5rem;
    width: 390px;
  }
  
  @media (min-width: 1920px){
    font-size: 4rem;
    }
`;

const Intro = styled.p`
  font-size: 1.3rem;
  line-height: 1.6rem;
  margin-top: 1rem;
  min-height: 6rem;

  @media (max-width: 360px) {
    font-size: 1rem;
    line-height: 1.4rem;
  }

  @media (min-width: 361px) and (max-width: 430px) {
    font-size: 1.1rem;
    line-height: 1.5rem;
  }

  @media (min-width: 431px) and (max-width: 767px) {
    font-size: 1.2rem;
    line-height: 1.6rem;
    width: 390px;
  }

  @media (min-width: 1920px){
    font-size: 2.5rem;
    line-height: 3rem;
    margin-bottom: 2rem;
  }
`;

const Corpo = styled.p`
  font-size: 1.3rem;
  line-height: 1.6rem;
  min-height: 2rem;
  font-weight: 400;

  @media (max-width: 360px) {
    font-size: 1rem;
    line-height: 1.4rem;
  }

  @media (min-width: 361px) and (max-width: 430px) {
    font-size: 1.1rem;
    line-height: 1.5rem;
  }

  @media (min-width: 431px) and (max-width: 767px) {
    font-size: 1.2rem;
    line-height: 1.6rem;
  }

  @media (max-width: 767px) {
    margin-top: 1rem;
  }

  @media (min-width: 1024px) and (max-width: 1366px) {
    margin-top: 1rem;
  }

  @media (min-width: 1920px){
    font-size: 2.5rem;  
    line-height: 3rem;
   }
`;

const ArrowDown = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  opacity: 0;
  min-height: 30px;
  size: 24px;

  @media (max-width: 768px) {
    margin-top: 3rem;
  }


  @media (min-width: 1920px){
  svg {
    font-size: 48px;
    }

`;



// --- TypingText ---
const TypingTextAlternative = ({ children, delay = 0, speed = 50, tag: Tag = 'p', className, ...props }) => {
  const textRef = React.useRef(null);
  const [rendered, setRendered] = React.useState(false);

  React.useEffect(() => {
    if (!textRef.current || rendered) return;

    const textContent = typeof children === 'string' ? children : children.toString();
    let currentIndex = 0;
    textRef.current.textContent = '';

    const typeWriter = () => {
      if (!textRef.current) return;

      if (currentIndex < textContent.length) {
        textRef.current.textContent += textContent.charAt(currentIndex);
        currentIndex++;
        setTimeout(typeWriter, speed);
      } else {
        setRendered(true);
      }
    };

    const timeout = setTimeout(typeWriter, delay * 1000);

    return () => clearTimeout(timeout);
  }, [children, delay, speed, rendered]);

  return <Tag ref={textRef} className={className} {...props} />;
};

// --- Componente Principal ---
export default function Home() {
  const arrowRef = useRef(null);

  useEffect(() => {
    if (!arrowRef.current) return;

    const tl = gsap.timeline();

    tl.to(arrowRef.current, {
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      delay: 17.5,
    }).to(arrowRef.current, {
      y: -10,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
    });

    return () => tl.kill();
  }, []);

  return (
    <Reveal>
      <Section id="home">
        <Avatar
          src={avatar}
          alt="Foto do desenvolvedor Rafael"
          role="img"
          aria-label="Retrato de Rafael, desenvolvedor web"
          loading='lazy'
        />
        <Content>
          <TypingTextAlternative tag={StyledH1} delay={1} speed={120}>
            Oi! Me chamo Rafael.
          </TypingTextAlternative>

          <TypingTextAlternative tag={Intro} delay={4.5} speed={60}>
            Desenvolvo sites responsivos, minimalistas e funcionais.  Na Corporação Pixel, cada detalhe importa.
          </TypingTextAlternative>

          <TypingTextAlternative tag={Corpo} delay={11.5} speed={60}>
            Aliás, daqui a pouco eu te explico o que é a Corporação Pixel.
          </TypingTextAlternative>

          <ArrowDown ref={arrowRef}>
            <FaChevronDown  />
          </ArrowDown>
        </Content>
      </Section>
    </Reveal>
  );
}
