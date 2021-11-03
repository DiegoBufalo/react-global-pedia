import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--background-header);
  height: 80px;

  .container {
    display: flex;
    max-width: 95%;
    margin: 0 auto;
    align-items: center;
  }

  .Button {
    background-color: transparent;
    border: 0;
    height: 53px;
    font-size: 16px;
    border-radius: 25px;
    transition: filter 0.4s;
    margin: 0 auto;
    margin-left: 10px;
    line-height:14px;
    padding: 0 40px;
    margin-top: 15px;

    &:hover {
      filter: brightness(0.9);
    }
  }

  img {
    justify-content: flex-start;
  }

  .flex-right{
    justify-content: flex-end;
    margin-left: auto;
  }

  .flex-left {
    justify-content: flex-start;
  }

  .buttonHeader {
    background-color: var(--background-header);
    color: var(--white);
    border: 2.5px solid #545554;
    box-sizing: border-box;
    text-transform: none;
    &:hover {
      background-color: #3B3B3B
    }
  }

  .MenuItem {
  color: black;
  }

  /* Increase the specificity */
  .MenuItem .Mui-selected {
    color: blue;
    }
`;