import styled from "styled-components";

export const CardTransactionStyle = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  .card {
    width: 100%;

    padding: 13px;
    margin-top: 29px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    background-color: var(--grey-1);

    .list {
      width: 100%;

      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      h2 {
        font-size: var(--headline-size);
        font-weight: var(--title-weight-4);
        font-family: var(--font-family-default);

        color: var(--grey-4);
      }

      .valueTrash {
        width: 20%;

        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
          padding: 3px 7px;

          border: 1px solid transparent;
          border-radius: 3px;

          svg {
            width: 12px;
            height: 12px;
          }
        }

        &:hover {
          button {
            background-color: var(--grey-3);

            transition: 1.3s;
          }

          svg {
            color: var(--white);

            transition: 1.5s;
          }
        }
      }
    }
  }

  span {
    font-size: var(--body-size);
    font-weight: var(--body-weight);

    color: var(--grey-3);
  }
`;
