import styled from "styled-components";

export const ListStyle = styled.div`
  width: 90%;
  height: 62%;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .entryBorder {
    border-left: 4px solid var(--color-secundary);
    border-radius: 4px;
  }

  .expenseBorder {
    border-left: 4px solid var(--color-terciary);
    border-radius: 4px;
  }

  @media (min-width: 435px) {
    width: 392px;
  }

  @media (min-width: 768px) {
    width: 455px;
    height: 425px;

    align-items: flex-start;

    margin: 0;
  }
`;
