import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1290px;
  margin: 0 auto;
  margin-top: 50px;

  footer {
    display: flex;
    margin: 20px 0;

    button {
      border: 0;
      height: 50px;
      padding: 0 40px;
      font-weight: bold;
      border-radius: 25px;
      color: var(--white);
      background-color: var(--button-link);
      transition: filter 0.4s;

      &:hover {
        filter: brightness(0.9);
      }

      &:first-child {
        margin-left: auto;
        margin-right: 10px;
        background-color: var(--background-header);
      }
    }
  }
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  padding: 20px;
  background-color: var(--white);
  box-shadow: 0 2px 48px rgba(0, 0, 0, 0.06);
  border-radius: 30px;

  div {
    display: flex;
    width: 100%;
    margin-top: 10px;
    div{
      display: flex;
      flex-direction: column;
      &+div{
        margin-left:10px;
      }
    }
  }

  .inputHeaders{
    flex-direction: column;
  }

  input,
  div input {
    width: 100%;
    height: 50px;
    border-radius: 25px;
    border: 1px solid var(--border);
    background-color: var(--white);
    padding-left: 16px;
    font: 14px 'Montserrat';

    & + input {
      margin-left: 10px;
    }

    &[name='numero'] {
      width: 30%;
    }

    &::placeholder {
      font: 14px 'Montserrat';
    }
  }
`;