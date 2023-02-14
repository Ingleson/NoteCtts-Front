import styled from "styled-components";
import "animate.css";

export const BaseLogin = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  animation: fadeIn 2s;

  h1 {
    text-shadow: -1px -1px 5px #000000;
    font-style: italic;
    padding-bottom: 10px;
  }
  span {
    font-size: 12px;
    font-style: italic;
  }
  button {
    background-color: #98FB98;
    font-weight: bold;
    color: #ffffff;
    text-shadow: -1px -1px 5px #000000;
  }
`
export const LoginForm = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 30px 40px;
  gap: 20px;
  width: 20rem;
  
  background-color: #008080;

  border: 1px solid #ffffff;
  border-radius: 5px;

  h2 {
    text-shadow: -1px -1px 5px #000000;
    font-style: italic;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    button {
      background-color: #49ccc1;
      margin-top: 15px;
    }
  }

  button {
    height: 35px;
    border-radius: 3px;
    border: none;
  }

  div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    label {
      padding: 7px 0;
      font-style: italic;
    }
    input {
      width: 100%;
      border: 1px solid #49ccc1;
      border-radius: 3px;

      color: #2F4F4F;

      padding: 15px 0 15px 10px;
    }
    span {
      color: #B22222;
      margin: 0;
      font-size: 12px;
      padding: 5px 2px;
      text-shadow: -1px -1px 5px #fff;
    }
  }
`