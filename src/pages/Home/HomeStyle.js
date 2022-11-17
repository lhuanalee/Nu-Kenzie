import styled from "styled-components";

export const HomeStyle = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;

  background-color: var(--grey-4);

  .description {
    width: 70%;

    margin-top: 20px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 15px;

    font-family: var(--font-family-default);

    h1 {
      font-size: var(--title-size-1);
      text-align: left;
    }

    p {
      font-size: var(--headline-size);
      font-weight: var(--body-weight);
      text-align: left;
    }

    button {
      width: 60%;

      background: var(--color-primary);
    }

    @media (min-width: 500px) {
      button {
        width: 210px;
      }
    }
  }

  .background {
    width: 17rem;
    transition: 2s;
  }

  @media (min-width: 500px) {
    .background {
      width: 20rem;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;

    gap: 60px;

    .description {
      width: 20%;

      gap: 28px;
    }

    .background {
      width: 29rem;
    }
  }
`;
