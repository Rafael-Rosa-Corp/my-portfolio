import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import avatar from '../assets/avatar.png';
import { useExperience } from './ExperienceContext';
import { gsap } from 'gsap';
import cursorImg from '../assets/cursor.png';

// --- Estilos ---

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 2rem 0;
  margin-top: 3rem;
  overflow-x: hidden;
  position: relative;

  @media (min-width: 821px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4rem;
    padding: 6rem 7rem 0;
  }

  @media (max-width: 391px) {
    padding-top: 3rem;
    margin-top: 3rem;
  }

  @media (min-width: 1920px) {
    gap: 120px;
    margin-left: 180px;
    margin-top: 120px;
    max-width: 100%;
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

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
`;

const Avatar = styled.img`
  flex: 1;
  width: 100%;
  max-width: 400px;
  height: auto;
  object-fit: contain;
  animation: ${bounce} 5s infinite;

  @media (max-width: 767px) {
    max-width: 17.75rem;
  }

  @media (min-width: 1920px) {
    max-width: 550px;
  }
`;

const Content = styled.div`
  flex: 1;
  max-width: 600px;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 768px) {
    margin-top: 6rem;
  }

  @media (max-width: 767px) {
    padding: 0 8vw;
    margin-top: 4rem;
    align-items: center;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 3rem;
  align-self: flex-end;

  @media (max-width: 767px) {
    align-self: center;
  }
`;

const StartButton = styled.button`
  font-family: "Pixelify Sans", sans-serif;
  text-shadow: 0 3px 8px rgba(207, 202, 222, 0.18), 0 2px 0 #29262e;
  background: none;
  color: ${({ theme }) => theme.accent};
  font-size: 3rem;
  font-weight: bold;
  border: none;
  cursor: url(${cursorImg}), pointer;
  position: relative;
  overflow: visible;
  padding: 0.5rem 0;
  display: inline-flex;
  transition: transform .15s ease;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.accent};
    outline-offset: 2px;
  }

  @media (max-width: 767px) {

    font-size: 2.5rem;
    border-right: 1.5px solid ${({ theme }) => theme.accent};
    border-left: 1.5px solid ${({ theme }) => theme.accent};
    border-radius: 16px;
    padding: 20px 18px;

    animation: ${pulse} 2.5s infinite;
    &:active {
      transform: scale(0.95);   
    }
  }

  @media (min-width: 1920px) {
    font-size: 4rem;
    margin-top: 4rem;
  }
`;


const MagneticWrapper = styled.span`
  display: inline-block;
  position: relative;
  will-change: transform;
  overflow: visible;
`;

const Letter = styled.span`
  display: inline-block;
  pointer-events: none;
  user-select: none;
  position: relative;
  margin-right: ${({ children }) => (children === ' ' ? '0.6rem' : '0.1rem')};
`;

// --- Componente ---

export default function IntroOverlay() {
  const { setStarted } = useExperience();
  const wrapperRef = useRef(null);
  const lettersRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  const text = 'Iniciar experiência'.split('');

  // Detecta mobile via largura da tela
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();

    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Letras começam embaralhadas no desktop
  useEffect(() => {
    if (isMobile) return;

    scatterLetters();
  }, [isMobile]);

  // Evento mousemove para efeito magnético no desktop
  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      wrapperRef.current.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
    };

    const handleMouseLeave = () => {
      if (wrapperRef.current) {
        wrapperRef.current.style.transform = 'translate(0,0)';
      }
      scatterLetters();
    };

    const node = wrapperRef.current;
    if (node) {
      node.addEventListener('mousemove', handleMouseMove);
      node.addEventListener('mouseleave', handleMouseLeave);
    }
    return () => {
      if (node) {
        node.removeEventListener('mousemove', handleMouseMove);
        node.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [isMobile]);

  // Animações GSAP
  const alignLetters = () => {
    lettersRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.to(el, {
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        duration: 0.5,
        delay: i * 0.02,
        ease: 'expo.out',
      });
    });
  };

  const scatterLetters = () => {
    lettersRef.current.forEach((el) => {
      if (!el) return;
      gsap.to(el, {
        x: gsap.utils.random(-130, 80),
        y: gsap.utils.random(-80, 75),
        rotate: gsap.utils.random(-45, 45),
        scale: gsap.utils.random(0.8, 1.4),
        duration: 0.6,
        ease: 'expo.out',
      });
    });
  };

  return (
    <Section>
      <Avatar src={avatar} alt="Foto do desenvolvedor Rafael" />
      <Content>
        <ButtonWrapper>
          {isMobile ? (
  <StartButton
    $isMobile={true}
    onClick={() => setStarted(true)}
    aria-label="Iniciar experiência"
  >
    Iniciar experiência
  </StartButton>
) : (
  <MagneticWrapper
    ref={wrapperRef}
    onMouseEnter={alignLetters}
    onMouseLeave={scatterLetters}
  >
    <StartButton
      $isMobile={false}
      onClick={() => setStarted(true)}
      aria-label="Iniciar experiência"
    >
      {text.map((letter, i) => (
        <Letter
          key={i}
          ref={(el) => (lettersRef.current[i] = el)}
        >
          {letter}
        </Letter>
      ))}
    </StartButton>
  </MagneticWrapper>
          )}
        </ButtonWrapper>
      </Content>
    </Section>
  );
}
