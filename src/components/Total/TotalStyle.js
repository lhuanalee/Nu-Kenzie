import styled from "styled-components";

export const TotalStyle = styled.div`
  width: 90%;

  padding: 20px 24px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  border: 1px solid var(--grey-2);
  border-radius: 4px;

  background-color: var(--color-primary);

  div {
    display: flex;
    justify-content: space-between;

    h2 {
      font-size: var(--headline-size);
      font-weight: var(--title-weight-4);
      font-family: var(--font-family-default);

      color: var(--white);
    }

    p {
      font-size: var(--headline-size);
      font-weight: var(--title-weight-4);
      font-family: var(--font-family-default);

      color: var(--white);
    }
  }

  span {
    padding: 0;

    font-size: var(--body-size);
    font-weight: var(--body-weight);
    font-family: var(--font-family-default);
    text-align: left;

    color: var(--white);
  }

  @media (min-width: 431px) {
    width: 388px;
  }

  @media (min-width: 768px) {
    width: 325px;

    gap: 0;

    margin-bottom: 80px;
  }
`;
