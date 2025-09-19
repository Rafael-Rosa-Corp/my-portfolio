
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';

const Section = styled.section`
  text-align: center;
  margin-top: 8rem;

  h2 {
    
    font-size: 2rem;
    color: ${({ theme }) => theme.accent};
    text-shadow: 0 3px 8px rgba(190, 184, 210, 0.18), 0 2px 0 #29262e;
  
    @media (min-width: 1920px) {
    font-size: 4rem;
  }
  }

  #descricao {
    font-size: 1.2rem;
    margin-top: 2rem;
    margin-bottom: 5rem;
    text-align: center;
   
    @media (min-width: 1920px) {
    font-size: 2.5rem;
    line-height: 1.5;
  }
   }
 
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 2rem;
  line-height: 1.6rem;
  margin-bottom: 8rem;
  

   // iPad Mini (768px)
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    
  }

  // iPad Air (820px)
  @media (max-width: 820px) and (min-width: 769px) {
    grid-template-columns: 1fr 1fr;

    > *:nth-child(3) {
      grid-column: 1 / 3;
      justify-self: center;
      max-width: 25rem;
    }
  }

  // iPad Pro 11" (834px)
  @media (max-width: 834px) and (min-width: 821px) {
    grid-template-columns: 1fr 1fr;

    > *:nth-child(3) {
      grid-column: 1 / 3;
      justify-self: center;
      max-width: 25rem;
    }
  }

  // iPad Pro 12.9" (1024px)
  @media (max-width: 1024px) and (min-width: 835px) {
    grid-template-columns: 1fr 1fr;

    > *:nth-child(3) {
      grid-column: 1 / 3;
      justify-self: center;
      max-width: 25rem;
    }
  }
 
`;


const projects = [
  {
    title: "Meu Portfólio",
    description:
      "Projeto autoral desenvolvido com React e styled-components. Seguindo a linha minimalista, com foco na experiência do usuário e acessibilidade. Vale ressaltar que as artes/desenhos feitas aqui foram criadas pelo artista @oeaeok.",
    link: "https://github.com/seu-usuario/portfolio",
    status: "Finalizado"
  },
  {
    title: "Site Institucional para Piscineiro",
    description:
      "Projeto de um site para apresentar a história e os serviços oferecidos pelo Piscineiro Sacudido, com foco em objetivo e minimalismo. Desenvolvido com Next.js e styled-components. Com artes/desenhos criado pelo artista @oeaeok. ",
    link: "#",
    status: "Em desenvolvimento ..."
  },
  {
    title: "E-commerce Conceitual de Camisetas",
    description:
      "Protótipo visual e funcional de uma loja virtual de camisetas, criado para explorar conceitos de design responsivo, acessibilidade e navegação fluida. Desenvolvido com WordPress e Elementor, com foco em estética minimalista e experiência do usuário.",
    link: "#",
    status: "Em desenvolvimento ... "
  },
  {
    title: "Estudo de portfólio",
    description:
      "Reaplicando o layout do designer Gustavo Campelo usando a Corporaçao Pixel como exemplo. Design interativo e feito com wordpress e elementor.",
    video: "/videos/estudo_layout_optimized_3.mp4",  
   
    }


];



export default function Projects() {
  return (
    <Reveal>
      <Section id="projects">
        <h2 id="projetos-title">Projetos</h2>
        <p id="descricao">Conheça as ideias que ganharam forma. Cada projeto aqui é uma extensão do que acreditamos.</p>
        <Grid>
          {projects.map((proj, index) => (
            <ProjectCard key={index} {...proj} />
          ))}
        </Grid>
      </Section>
    </Reveal>
  );
}
