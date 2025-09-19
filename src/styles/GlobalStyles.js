import { createGlobalStyle } from 'styled-components';
import cursorImg from '../assets/cursor.png';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

 

  body {
    overflow-x: hidden;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.body};
    
    
     background-color: #29262e;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%2338353e' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    }

  

  a {
    color: inherit;
    text-decoration: none;
    font-family: "Syne", sans-serif;
    letter-spacing: 0.06em;
    cursor: url(${cursorImg}), pointer;
    font-weight: 500;
  }

  p {
      color: ${({ theme }) => theme.text};
      font-family: 'Inter', sans-serif;
      letter-spacing: 0.09em !important;
      text-shadow: 0 2px 8px rgba(53,38,100,0.18), 0 1px 0 #29262e;
      font-weight: 400;
      opacity: 0.85;

      
  }

  strong {
    
    font-weight: 600; 
    background: none;
  }

  @media (max-width: 767px) {
  strong {
    font-weight: 500;
    }
  }

  h1 {
    font-family: "Pixelify Sans", sans-serif;
    letter-spacing: 0.02em;
    font-weight: bold;
  } 

  h2 {
    font-family: "Syne", sans-serif;
    letter-spacing: 0.03em;
    font-weight: bold;
  }

  h3 {
    font-weight: bold;
    }


  section {
    padding: 4rem 2rem;
  }

.custom-tooltip {
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;
  padding: 0.6rem 0.8rem;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  font-family: 'Inter', sans-serif;
  text-align: center;
  max-width: 200px;
}


 @media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.15); opacity: 0.7; }
}

.pulse-loader {
  animation: pulse 1.5s infinite;
}
  
`;


export default GlobalStyles;
