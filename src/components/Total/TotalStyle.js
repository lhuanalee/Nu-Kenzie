import styled from "styled-components";

export const TotalStyle = styled.div`
  width: 90%;

  padding: 20px 24px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  border: 1px solid var(--grey-2);
  border-radius: 4px;

  div {
    display: flex;
    justify-content: space-between;

    h2 {
      font-size: var(--headline-size);
      font-weight: var(--title-weight-4);
      font-family: var(--font-family-default);

      color: var(--grey-4);
    }

    p {
      font-size: var(--headline-size);
      font-weight: var(--title-weight-4);
      font-family: var(--font-family-default);

      color: var(--color-primary);
    }
  }

  span {
    font-size: var(--body-size);
    font-weight: var(--body-weight);
    font-family: var(--font-family-default);
    text-align: left;

    color: var(--grey-3);
  }

  @media (min-width: 431px) {
    width: 388px;
  }

  @media (min-width: 768px) {
    width: 325px;

    margin-bottom: 80px;
  }
`;
