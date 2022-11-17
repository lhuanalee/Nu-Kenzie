import styled from "styled-components";

export const FormStyle = styled.form`
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;

  .container {
    width: 90%;

    margin-top: 130px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: 1px solid var(--grey-2);
    border-radius: 4px;
  }

  .form {
    width: 90%;

    padding: 38px 0 19px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    label {
      padding-bottom: 12px;

      text-align: left;
      font-size: var(--title-size-4);
      font-weight: var(--body-weight);

      color: var(--grey-4);
    }

    input {
      padding: 12px 13px;

      border: 2px solid transparent;
      border-radius: 8px;

      background-color: var(--grey-1);

      outline: none;
    }
  }

  span {
    padding: 4px 0 17px;
    text-align: left;
    font-size: var(--title-size-4);
    font-weight: var(--body-weight);

    color: var(--grey-3);
  }

  section {
    display: flex;
    align-items: center;

    div {
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      .input {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        border: 2px solid transparent;
        border-radius: 8px;

        background-color: var(--grey-1);
      }

      .value {
        width: 40%;

        padding: 10px 0 11px 10px;

        outline: none;
      }

      p {
        padding-right: 15px;

        font-size: var(--headline-size);
        font-weight: var(--body-weight);
        color: var(--black);
      }
    }
  }

  button {
    width: 90%;

    margin-bottom: 38px;

    font-size: var(--body-size);

    background-color: var(--color-primary);
  }

  @media (min-width: 431px) {
    .container {
      width: 388px;
    }
  }

  @media (min-width: 768px) {
    width: 41%;

    .container {
      width: 325px;
    }
  }
`;
