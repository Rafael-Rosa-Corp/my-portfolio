import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import Reveal from '../components/Reveal'
import polvoBackground from '../assets/polvo-background.png'
import { FaRegFileAlt, FaStore, FaPalette, FaBullseye, FaRocket, FaOctopusDeploy } from 'react-icons/fa'
import Marquee from 'react-fast-marquee'


const Section = styled.section`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  
  padding-bottom: 2rem;
  border-top: 1px solid #352664;
  border-bottom: 1px solid #352664;
  position: relative;
  

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: url(${polvoBackground});
    background-repeat: no-repeat;
    background-position: right center;
    background-size: contain;
    filter: blur(13px);
    brightness(0.9);
    opacity: 0.35;
    z-index: 0;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;

    &::before {
      background-position: center 21%;
      opacity: 0.35;
      filter: blur(9px);
    }
  }

  > * {
    position: relative;
    z-index: 1;
  }
`

const Container = styled.div`
 
  margin: 0 auto;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }

 
`

const Title = styled.h2`
  font-family: "Pixelify Sans", sans-serif;
  font-size: 2.3rem;
  margin-top: 3rem;
  margin-bottom: 4.5rem;
  color: ${({ theme }) => theme.accent};
  text-align: center;
  text-shadow: 0 3px 8px rgba(210, 206, 224, 0.18), 0 2px 0 #29262e;

  @media (min-width: 1920px) {
    font-size: 4rem;
  }
`

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (min-width: 1920px) {
    font-size: 2.5rem;
    line-height: 1.5;
  }
`

const CTBButton = styled.a`
  font-family: "syne", sans-serif;
  display: block;
  width: fit-content;
  margin: 0rem auto;
  margin-top: 6rem;
  margin-bottom: 5rem;
  background: ${({ theme }) => theme.secondary};
  color: #f2f2f2;
  padding: 0.6rem 1.2rem;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  text-align: center;
  letter-spacing: 0.14vw;
  position: relative;
  overflow: hidden;

  @media (min-width: 1920px) {
    font-size: 1.8rem;}

  &:hover {
    
    transform: translateY(-2px);
  }

  @media (max-width: 767px) {
    letter-spacing: 1.2px;
  }
`



const MetricCarousel = styled.div`
  
  width: 100%;
  overflow: hidden;
  position: relative;
  background: transparent;
  margin-top: 3rem;
  margin-bottom: 10rem;
  font-weight: 400;
  font-size: 1rem;
  color: ${({ theme }) => theme.secondary};
  font-style: italic;
  text-align: center;
  display: flex;
  align-items: center;
  
  font-family: 'Inter', sans-serif;
      letter-spacing: 0.09em !important;
      opacity: 0.85;
  box-sizing: border-box;

   @media (min-width: 1920px) {
    font-size: 1.8rem;
    
  }


   /* Efeito de fade nas laterais */
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 60px;
    height: 100%;
    z-index: 2;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, ${({ theme }) => theme.primary} 0%, transparent 100%);
    
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, ${({ theme }) => theme.primary} 0%, transparent 100%);
    
  }

`

const metricItems = [
  "🚀 Unindo criatividade e propósito em cada novo projeto autoral."];

const SubTitle = styled.h3`
  font-family: "Pixelify Sans", sans-serif;
  font-size: 2.2rem;
  letter-spacing: 0.03em;
  margin-top: 5rem;
  margin-bottom: 4.5rem;
  color: ${({ theme }) => theme.accent};
  text-align: center;
  text-shadow: 0 3px 8px rgba(210, 206, 224, 0.18), 0 2px 0 #29262e;

  @media (min-width: 1920px) {
    font-size: 3.5rem;}
`

const ServiceCard = styled.div`
  background: ${({ theme }) => theme.primary};
  position: relative;
  padding: 1.5rem;
  padding-top: 2rem;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(53, 38, 100, 0.30);
  transform: ease-in-out;
  transition:
    transform 0.25s cubic-bezier(0.4, 0.2, 0.2, 2),
    box-shadow 0.35s cubic-bezier(0.2, 0.2, 0.2, 3);

  &:hover {
    transform: translateY(-20px);
    box-shadow: 0 8px 24px rgba(53, 38, 100, 1);
    }
  
  



  


  h3 {
    font-family: "Pixelify Sans", sans-serif;
    letter-spacing: 0.03em;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.accent};
    text-align: center;
    text-shadow: 0 2px 4px rgba(167, 160, 194, 0.18), 0 1px 0 #29262e;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    
    @media (min-width: 1920px) {
      font-size: 2.5rem;}
  }

  p {
    font-size: 0.95rem;
    margin-top: 1rem;
    line-height: 1.5;
    text-align: center;

    @media (min-width: 1920px) {
      font-size: 1.8rem;}
  }


   .icon-pixel-wrapper {
    position: absolute;
    left: 50%;
    top: -44px;
    transform: translateX(-50%);
    z-index: 1;
    width: 100%;
    
  }

  .icon-pixel {
    font-size: 26px;
    
    
    
    }



   @media (min-width: 1920px) {

    
    padding: 2.5rem;
    max-width: 48rem;
    padding-top: 4rem;
  


    .icon-pixel {
      font-size: 50px;
    }

    .icon-pixel-wrapper {
    position: absolute;
    top: -80px;
    width: 83%;
    z-index: 1;
    }
  } 
`
// controla os services cards
const MiniGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  justify-items: center;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 32rem;
    margin-left: auto;
    margin-right: auto;
  }

  > ${ServiceCard}:nth-child(3) {
    grid-column: 1 / -1;
    justify-self: center;
    max-width: 25rem;

    @media (min-width: 1920px) {
      max-width: 48rem;
    }
  }
`


// cards dos grids
const Card = styled.div`
  background: ${({ theme }) => theme.primary};
  padding: 1.5rem;
  padding-top: 2rem;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(53, 38, 100, 0.20);
   transition:
    transform 0.25s cubic-bezier(0.4, 0.2, 0.2, 2),
    box-shadow 0.35s cubic-bezier(0.2, 0.2, 0.2, 3);

  &:hover {
    transform: translateY(20px);
    box-shadow: 0 8px 24px rgba(53, 38, 100, 1);
    }

 

  h3 {
    font-family: "Pixelify Sans", sans-serif;
    position: relative;
    letter-spacing: 0.03em;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.accent};
    text-align: center;
    text-shadow: 0 2px 4px rgba(167, 160, 194, 0.18), 0 1px 0 #29262e;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    @media (min-width: 1920px) {
      font-size: 2.5rem;}
  }

  p {
    font-size: 0.95rem;
    margin-top: 1rem;
    line-height: 1.5;
    text-align: center;

    @media (min-width: 1920px) {
      font-size: 1.8rem;}
  }

  .icon-pixel-wrapper {
    position: absolute;
    left: 50%;
    top: -44px;
    transform: translateX(-50%);
    z-index: 1;
    width: 100%;
    
  }

   .icon-pixel {
    font-size: 26px;
    
    }


  @media (min-width: 1920px) {
    
    padding: 2.5rem;
    padding-top: 4.5rem;

    .icon-pixel {
      font-size: 50px;
      
    }
  
    .icon-pixel-wrapper {
    position: absolute;
    top: -90px;
    width: 83%;
    z-index: 1;
    }
  
`

// só controla os cards
const Grid = styled.div`  
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 2rem;

  > ${Card}:nth-child(3) {
    grid-column: 1 / -1;
    justify-self: center;
    max-width: 25rem;

    @media (min-width: 1920px) {
      max-width: 48rem;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    > ${Card}:nth-child(3) {
      grid-column: auto;
      justify-self: stretch;
      max-width: none;
    }
  }
`

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`

const Dots = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`

const Dot = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ $active, theme }) => ($active ? theme.secondary : '#ccc')};
`

const IconTitle = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding-top: 12px;

  
`



function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return isMobile
}

export default function CorpPixel() {
  const isMobile = useIsMobile()
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef(null)

  // Cards de serviços com ícones
  const serviceCards = [
    {
      icon: <FaRegFileAlt className='icon-pixel' color="#6a54d8" />,
      title: "Sites Institucionais",
      text: "Sites profissionais, responsivos e com layout personalizado para empresas e profissionais."
    },
    {
      icon: <FaStore className='icon-pixel' color="#6a54d8" />,
      title: "Lojas Virtuais",
      text: "E-commerces completos com painel de gestão, pagamento online e estrutura escalável."
    },
    {
      icon: <FaPalette className='icon-pixel' color="#6a54d8" />,
      title: "Landing Pages",
      text: "Página única e estratégica, com design responsivo e minimalista, criada para atrair, comunicar e converter."
    }
  ]

  // Cards DNA criativo com ícones
  const dnaCards = [
    {
      icon: <FaBullseye className='icon-pixel' color="#6a54d8" />,
      title: "Estética",
      text: "Minha criação une propósito e forma. Cada detalhe é pensado para comunicar não só com o olhar, mas também com a experiência de quem interage."
    },
    {
      icon: <FaRocket className='icon-pixel' color="#6a54d8" />,
      title: "Inovação Autoral",
      text: "Meus projetos autorais são espaços para experimentar, evoluir e desafiar padrões, sempre com a marca da Corporação Pixel."
    },
    {
      icon: <FaOctopusDeploy className='icon-pixel' color="#a3193e" />,
      title: "Adaptabilidade Criativa",
      text: "Inspirado pela fluidez do polvo, adapto minha técnica e visão a cada contexto, mantendo a essência e ampliando as possibilidades."
    }
  ]

  const nextCard = () => setCurrent((prev) => (prev + 1) % dnaCards.length)
  const prevCard = () => setCurrent((prev) => (prev - 1 + dnaCards.length) % dnaCards.length)

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    if (deltaX > 50) prevCard()
    else if (deltaX < -50) nextCard()
    touchStartX.current = null
  }

  return (
    <Reveal>
      <Section id="corp-pixel">
        <Container>
          <Title>Corporação Pixel</Title>

          <Description>
            Chegamos à parte da <strong>Corporação Pixel</strong>, deixa eu te contar o que ela é.
            <br/><br/>
            Trata-se do meu estúdio criativo. É por meio dela que desenvolvo <strong>sites institucionais, portfólios personalizados e lojas virtuais</strong> que unem design minimalista, tecnologia moderna e propósito visual.
            <br /><br />
            O <strong>polvo</strong> é o emblema que escolhi: criatura de <strong>inteligência silenciosa</strong>, fluida e estratégica — assim como as criações da Corp. Pixel.
          </Description>
          <MetricCarousel as={Marquee} gradient={false} speed={40}>
          {[...metricItems, ...metricItems,...metricItems].map((item, idx) => (
          <span key={idx} style={{  display: "inline-block", marginRight: "3rem" }}>{item}</span>
          ))}
          </MetricCarousel>
      

          <SubTitle>O que posso criar para você:</SubTitle>
          <MiniGrid>
            {serviceCards.map((card, idx) => (
              <ServiceCard key={idx}>
                <h3>
                  <IconTitle>
                  <span className="icon-pixel-wrapper"> 
                    {card.icon}
                  </span>    
                    {card.title}
                  </IconTitle>
                </h3>
                <p>{card.text}</p>
              </ServiceCard>
            ))}
          </MiniGrid>

          <SubTitle>Nosso DNA Criativo</SubTitle>
          {isMobile ? (
            <CarouselContainer onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
              <Card>
                <h3>
                  <IconTitle>
                    <span className="icon-pixel-wrapper">
                    {dnaCards[current].icon}
                    </span>
                    {dnaCards[current].title}
                  </IconTitle>
                </h3>
                <p>{dnaCards[current].text}</p>
              </Card>

              <Dots>
                {dnaCards.map((_, idx) => (
                  <Dot key={idx} $active={idx === current ? 1 : 0} />
                ))}
              </Dots>
            </CarouselContainer>
          ) : (
            <Grid>
              {dnaCards.map((card, idx) => (
                <Card key={idx}>
                  <h3>
                      <span className="icon-pixel-wrapper">
                      {card.icon}
                      </span>
                      {card.title}
                    
                  </h3>
                  <p>{card.text}</p>
                </Card>
              ))}
            </Grid>
          )}
        </Container>
        <CTBButton href="#contact">Vamos transformar a sua ideia em site?</CTBButton>
      </Section>
    </Reveal>
  )
}
