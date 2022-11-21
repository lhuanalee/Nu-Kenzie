import styled, { keyframes } from "styled-components";

export const animationCard = keyframes`
  from {
    transform: translateX(-800px);
  }
  to {
    transform: translateX(0px);
  }
`;

export const FormStyle = styled.form`
  width: 100vw;

  margin-top: 105px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;

  animation: ${animationCard} 1.5s;

  .container {
    width: 90%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    border: 1px solid var(--grey-2);
    border-radius: 4px;

    box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.5);
  }

  .form {
    width: 90%;

    padding: 38px 0 19px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    label {
      padding-bottom: 12px;

      text-align: left;
      font-size: var(--title-size-4);
      font-weight: var(--body-weight);

      color: var(--grey-4);
    }

    input {
      width: 100%;

      padding: 12px 13px;

      border: 2px solid transparent;
      border-radius: 8px;

      background-color: var(--grey-1);

      outline: none;
    }
  }

  p {
    padding: 4px 0 17px;
    text-align: left;
    font-size: var(--body-size);
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

        input {
          border: 2px solid transparent;
          border-radius: 8px;
          background: var(--grey-1);
        }

        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }

      .value {
        width: 55%;

        padding: 10px 0 11px 10px;

        outline: none;
      }

      p {
        padding: 0 15px 0;

        font-size: var(--headline-size);
        font-weight: var(--body-weight);
        color: var(--black);
      }
    }
  }

  button {
    width: 90%;

    padding: 12px 0;

    margin-bottom: 38px;

    font-size: var(--body-size);
    font-weight: var(--headline-weight);

    color: var(--white);
    background-color: var(--color-primary);
  }

  @media (min-width: 431px) {
    margin-top: 105px;

    .container {
      width: 388px;
    }
  }

  @media (min-width: 768px) {
    width: 400px;
    height: 425px;

    margin-top: 13px;

    justify-content: flex-start;

    .container {
      width: 325px;
    }
  }
`;
