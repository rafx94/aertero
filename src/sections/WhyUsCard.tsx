import React from 'react';
import styled from 'styled-components';

const WhyUsCard = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <p data-desc="Fast and responsive"><span>⚡</span></p>
        <p data-desc="Secure and encrypted"><span>🔒</span></p>
        <p data-desc="AI-powered"><span>🤖</span></p>
        <p data-desc="24/7 Support"><span>📞</span></p>
        <p data-desc="Easy to use"><span>👌</span></p>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    max-width: 800px;
    height: auto;
    margin: 0 auto;
    border-radius: 12px;
    background: linear-gradient(145deg, #333, #000);
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 1em;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    justify-content: center;
    align-items: center;
  }

  .card p {
    width: 100%;
    height: 100px;
    overflow: hidden;
    cursor: pointer;
    border-radius: 8px;
    transition: background 0.5s, height 0.5s;
    background: linear-gradient(145deg, #212121, #000);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .card p:hover {
    height: 140px;
  }

  .card p span {
    padding: 0.2em;
    text-align: center;
    font-size: 2rem;
    transition: transform 0.5s;
    text-transform: uppercase;
    color: #00ffeb;
    font-weight: bold;
    letter-spacing: 0.1em;
    position: relative;
    z-index: 1;
  }

  .card p:hover span {
    transform: rotate(0);
  }

  .card p::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.1);
    z-index: 0;
    transition: opacity 0.5s;
    pointer-events: none;
    opacity: 0;
  }

  .card p:hover::before {
    opacity: 1;
  }

  .card p::after {
    content: attr(data-desc);
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    font-size: 0.75rem;
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 2;
    text-align: center;
    width: 90%;
  }

  .card p:hover::after {
    opacity: 1;
  }
`;

export default WhyUsCard;
