import styled from "styled-components";

export const FinancialSummaryStyle = styled.div`
  width: 100%;

  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .summary {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    justify-content: center;
    align-items: center;

    transition: 2s;
  }

  p {
    font-size: var(--headline-size);
    font-weight: var(--title-weight-4);
    font-family: var(--font-family-default);

    color: var(--grey-4);
  }

  div {
    max-width: 100%;

    display: flex;
    gap: 7px;

    button {
      &:hover {
        color: var(--white);
        background-color: var(--grey-3);

        transition: 1.3s;
      }
    }

    .activedButton {
      background-color: var(--color-primary);
      color: var(--white);
    }
  }

  @media (min-width: 435px) {
    .summary {
      width: 420px;
      flex-direction: row;
    }
  }

  @media (min-width: 768px) {
    width: 100%;

    margin: 0;

    .summary {
      width: 100%;

      justify-content: space-between;
      align-items: center;
    }

    div {
      gap: 16px;

      transition: 2s;
    }
  }
`;
