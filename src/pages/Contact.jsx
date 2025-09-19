import React, { useState } from 'react';
import styled from 'styled-components';
import Reveal from '../components/Reveal';
import { FaWhatsapp } from 'react-icons/fa';
import cursorImg from '../assets/cursor.png';

const Section = styled.section`
   text-align: center;

   h2{
    font-size: 2rem;
    margin-bottom: 5rem;
    color: ${({ theme }) => theme.accent};
    text-shadow: 0 3px 8px rgba(190, 184, 210, 0.18), 0 2px 0 #29262e;
   
   @media (min-width: 1920px) {
    font-size: 4rem;
   }
   
   
  }

  
  
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 25rem;
  margin: 0 auto;
     
  
  @media (min-width: 1920px) {
    max-width: 40rem;}


  label {
    font-family: 'Syne', sans-serif;
    font-weight: 500;
    text-align: left;
    margin-bottom: 0;

    &.label-msg {
      margin-top: 1rem;
      }

    @media (min-width: 1920px) {
      font-size: 1.2rem;
    }
    
      }


  input, textarea {
    font-family: 'inter', sans-serif;
    padding: 0.75rem;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    background-color: #e6e6e6f8;
    margin-top: 0.15rem;
  }


  input:invalid:focus, textarea:invalid:focus {
     background: #ffeaea;
    box-shadow: 0 0 0 2px  #e53935;
  }

  button {
    font-family: 'Syne', sans-serif;
    padding: 0.6rem 1.2rem;
    background: ${({ theme }) => theme.accent};
    color: #f2f2f2;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    letter-spacing: 0.14vw;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.5rem;
    cursor: url(${cursorImg}), pointer;
    transition: all 0.3s ease;

    &:hover, &:active {
      background: ${({ theme }) => theme.secondary};
      transform: translateY(2px);
    }

    @media (max-width: 767px) {
      letter-spacing: 1.2px;
    }

    @media (min-width: 1920px) {
      font-size: 1.4rem;
      max-width: 40rem;
  }


  .whats-icon {
    fill: #f2f2f2;
    font-size: 20px;
    justify-content: flex-end;
    margin-left: 8px;

    @media (min-width: 1920px) {
      font-size: 30px;
    }
  }

  }


`;

export default function Contact() {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const mensagemWhats = 
      `Nome: ${nome}\nMensagem: ${mensagem}`;
    const texto = encodeURIComponent(mensagemWhats);
    const numero = '5535991409150'; // Exemplo: 5511999999999
    const link = `https://wa.me/${numero}?text=${texto}`;
    window.open(link, '_blank');
    setNome('');
    setMensagem('');
  };

  return (
    <Reveal>
      <Section id="contact">
        <h2>Contato / Orçamento</h2>
        <Form onSubmit={handleWhatsApp}>
          <label htmlFor="nome">Seu Nome:</label>
          <input
            type="text"
           
            required
            minLength={4}
            value={nome}
            onChange={e => setNome(e.target.value)}
            onInvalid={e => e.target.setCustomValidity('Digite seu nome (mínimo 4 letras)')}
            onInput={e => e.target.setCustomValidity('')}
            
          />
          <label className='label-msg' htmlFor="mensagem">Sua ideia:</label>
          <textarea
            rows="6"
            placeholder={`* Diga o que você tem em mente!\n\nExemplo:\n• Quero um site para meu negócio\n• Um portfólio profissional\n• Uma page para meu produto`}
            required
            minLength={8}
            value={mensagem}
            onChange={e => setMensagem(e.target.value)}
            onInvalid={e => e.target.setCustomValidity('Descreva sua ideia com pelo menos 8 letras.')}
            onInput={e => e.target.setCustomValidity('')}
            
          />
          <button type="submit">
            
            Enviar ideia para o WhatsApp
            <FaWhatsapp className='whats-icon'  />
          </button>
        </Form>
      </Section>
    </Reveal>
  );
}