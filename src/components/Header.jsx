import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaHome, FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

// --- Styled Components ---

const Nav = styled.nav`
  background: ${({ theme }) => theme.navBg};
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between; /* Links à esquerda, sociais à direita */
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
  transform: ${({ $isHidden }) => ($isHidden ? 'translateY(-100%)' : 'translateY(0)')};
  opacity: ${({ $isHidden }) => ($isHidden ? 0 : 1)};

  @media (max-width: 48rem) {
    justify-content: flex-end;
    
  }

`;

const Links = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  a {
    position: relative;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s ease;
    color: ${({ theme }) => theme.text};
    font-size: 1rem;

    

    @media (min-width: 1920px) {
      font-size: 1.5rem;
    }

  
  }

  a::after {
    content: '';
    position: absolute;
    bottom: -0.1875rem;
    left: 50%;
    transform: translateX(-50%);
    width: 0%;
    height: 0.05rem;
    background-color: ${({ theme }) => theme.text};
    transition: width 0.3s ease;
  }

  a:hover::after {
    width: 100%;
  }

  a:focus-visible {
    outline: 0.125rem solid ${({ theme }) => theme.aboutBg};
    outline-offset: 0.125rem;
  }

  .home-link {
    font-weight: 600;
    color: ${({ theme }) => theme.secondary};
  }

  a.home-link svg {
    font-size: 1.5rem;
  }

   @media (min-width: 1920px) {
      a.home-link svg {
        font-size: 2rem;
      }
    }

  @media (max-width: 48rem) {
    position: absolute;
    top: 4.375rem;
    left: 0;
    width: 100%;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    padding: 1rem 2rem;
    background: rgba(255, 255, 255, 0.05);
    -webkit-backdrop-filter: blur(10px) saturate(180%);
    backdrop-filter: blur(10px) saturate(180%);
    box-shadow: 0 0.5px 1px 0 #494352;
    transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
    opacity: ${({ $isMenuOpen }) => ($isMenuOpen ? 1 : 0)};
    transform: ${({ $isMenuOpen }) => ($isMenuOpen ? 'translateY(0)' : 'translateY(-0.625rem)')};
    visibility: ${({ $isMenuOpen }) => ($isMenuOpen ? 'visible' : 'hidden')};
    pointer-events: ${({ $isMenuOpen }) => ($isMenuOpen ? 'auto' : 'none')};
    gap: 1rem;

    a {
      &::after {
        display: none;
      }
    }
  }
`;

const Social = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;

  a {
    font-size: 1.25rem;
    opacity: 0.75;
    transition: color 0.3s ease, transform 0.3s ease, opacity 0.3s ease;
    color: ${({ theme }) => theme.text};


    @media (min-width: 1920px) {
      font-size: 1.75rem;
    }

    &:hover {
      color: ${({ theme }) => theme.secondary};
      transform: scale(1.1);
      opacity: 1;
    }
  }

  &.desktop-social {
    @media (max-width: 48rem) {
      display: none;
    }
  }

  &.mobile-social {
    display: none;

    @media (max-width: 48rem) {
      display: flex;
      
    }
  }

  @media (max-width: 48rem) {
    &:active {
      color: ${({ theme }) => theme.secondary};
      transform: scale(0.9);
    }
  }
`;

const MobileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (min-width: 48.0625rem) {
    display: none;
  }

 
`;

const Hamburger = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.text};

  @media (max-width: 48rem) {
    flex-direction: reverse;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  transition: opacity 0.3s;
  pointer-events: auto;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

// --- Componente Header ---

export default function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHidden(currentScrollY > lastScrollY && currentScrollY > 30); // só some depois de rolar 30px
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMenuOpen]);

  return (
    <>
      {isMenuOpen && <Overlay onClick={() => setIsMenuOpen(false)} />}
      <Nav $isHidden={isHidden}>
        <Links $isMenuOpen={isMenuOpen}>
          <a href="#home" className="home-link" title="Início">
            <FaHome />
          </a>
          <a href="#about">Sobre</a>
          <a href="#corp-pixel">Estúdio</a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
        </Links>

        <Social className="desktop-social">
          <a
            href="https://github.com/Rafael-Rosa-Corp"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rafael-rosa-corp-pixel/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </Social>

        <MobileWrapper>
          <Social className="mobile-social">
            <a
              href="https://github.com/Rafael-Rosa-Corp"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rafael-rosa-corp-pixel/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </Social>

          <Hamburger onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </Hamburger>
        </MobileWrapper>
      </Nav>
    </>
  );
}
