import React from "react";
import styled from "styled-components";
import OfferCard from "./OfferCard";

const OfferSection = () => {
  return (
    <SectionWrapper>
      <div className="cards-row">
        <OfferCard />
        <OfferCard />
        <OfferCard />
      </div>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 64px 0;
  background: #0a0a0a;

  .cards-row {
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
`;

export default OfferSection;
