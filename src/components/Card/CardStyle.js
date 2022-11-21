import styled, { keyframes } from "styled-components";

export const animationCard = keyframes`
  from {
    transform: translateX(800px);
  }
  to {
    transform: translateX(0px);
  }
`;

export const CardStyle = styled.div`
  width: 100%;

  padding: 30px 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  overflow: hidden;

  h1 {
    padding-bottom: 27px;

    font-size: var(--headline-size);
    font-weight: var(--title-weight-4);
    font-family: var(--font-family-default);

    color: var(--black);
  }

  img {
    width: 100%;

    padding-bottom: 30px;
  }

  .firstNoCard {
    animation: ${animationCard} 1s;
  }

  .secondNoCard {
    animation: ${animationCard} 1.5s;
  }

  .thirdNoCard {
    animation: ${animationCard} 2s;
  }

  @media (min-width: 435px) {
    width: 400px;
  }

  @media (min-width: 768px) {
    width: 455px;
  }
`;
