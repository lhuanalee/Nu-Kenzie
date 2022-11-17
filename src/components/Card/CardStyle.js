import styled from "styled-components";

export const CardStyle = styled.div`
  width: 100%;

  padding: 30px 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

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

  @media (min-width: 435px) {
    width: 400px;

    margin: 0 auto;
  }
`;
