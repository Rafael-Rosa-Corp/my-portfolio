import styled from 'styled-components';
import { useState } from 'react';
import cursorImg from '../assets/cursor.png';
import { keyframes } from 'styled-components';



const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${({ theme }) => theme.primary};
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(53, 38, 100, 0.3);
  
  transition:
    transform 0.25s cubic-bezier(0.4, 0.2, 0.2, 4),
    box-shadow 0.35s cubic-bezier(0.2, 0.2, 0.2, 3);

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 24px rgba(53, 38, 100, 1);
  }

  h3 {
    font-family: "Syne", sans-serif;
    letter-spacing: 0.03em;
    margin-bottom: 0.8rem;
    color: ${({ theme }) => theme.accent};
    text-align: center;
    text-shadow: 0 2px 4px rgba(167, 160, 194, 0.18), 0 1px 0 #29262e;
  
  @media (min-width: 1920px) {
    font-size: 1.5rem;}
    }

  video {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 1rem;
    max-height: 220px;
    object-fit: cover;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.5;
    text-align: center;
    margin-top: 0.5rem;
    overflow: hidden;
    opacity: 0.6;
    max-height: 2rem;
    transition: max-height 0.4s ease, opacity 0.4s ease;

    &.expanded {
      max-height: 500px;
      opacity: 1;
    }

    @media (min-width: 767px) {
      max-height: none;
      opacity: 1;
    }
  
  @media (min-width: 1920px) {
    font-size: 1.1rem;}
  
    }



  .toggle-btn {
    background: none;
    border: none;
    color: ${({ theme }) => theme.accent};
    font-weight: 600;
    margin-top: 0.4rem;
    cursor: pointer;
    font-size: 0.85rem;
    font-family: "Syne", sans-serif;
    letter-spacing: 0.05em;
    display: none;
    text-align: center;

    @media (max-width: 766px) {
      display: block;
      margin: 0.5rem auto 0;

      animation: ${pulse} 3s infinite;
    }

    
  }

  a {
    color: ${({ theme }) => theme.accent};
    font-weight: 600;
    display: inline-block;
    margin-top: 7rem;
    text-align: center;
    text-decoration: none;
    font-size: 1rem;
    letter-spacing: 0.14vw;
    cursor: url(${cursorImg}), pointer;

    @media (max-width: 766px) {
      margin-top: 2rem;
      }

    &:hover {
      text-decoration: underline ;
      
    }
  }
`;



const StatusText = styled.span`
  font-family: "Syne", sans-serif;
  color: ${({ theme }) => theme.accent};
  font-weight: 600;
  display: block;
  margin-top: auto;
  text-align: center;
  font-size: 1rem;
  letter-spacing: 0.14vw;
  cursor: default;

  &.hidden {
    display: none;

    @media (min-width: 767px) {
      display: block;
    }
  }

  &.visible {
    display: block;
  }

  @media (min-width: 1920px) {
    font-size: 1rem;}
`;

export default function ProjectCard({ title, description, link, status, video }) {
  const [expanded, setExpanded] = useState(false);
  const toggleDescription = () => setExpanded(!expanded);

  return (
    <Card>
      <h3>{title}</h3>

      {/* Se houver vídeo, mostra ele */}
      {video && (
        <video src={video} controls muted loop />
      )}

      <p className={expanded ? 'expanded' : ''}>{description}</p>

      {/* Botão só aparece no mobile */}
      <button className="toggle-btn" onClick={toggleDescription}>
        {expanded ? 'Ver menos' : 'Ver mais'}
      </button>

      {link && link !== "#" ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          Ver projeto no GitHub →
        </a>
      ) : (
        <StatusText className={expanded ? 'visible' : 'hidden'}>
          {status}
        </StatusText>
      )}
    </Card>
  );
}
