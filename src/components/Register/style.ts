import styled, { StyledComponent } from "styled-components";
import "animate.css";

export const BaseRegister = styled.div`
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
`

export const RegisterForm = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 30px 40px;
  gap: 20px;
  width: 23rem;
  
  background-color: #008080;

  border: 1px solid #ffffff;
  border-radius: 5px;

  button {
    border: none;
    border-radius: 5px;
    background-color: #98FB98;
    color: #ffffff;
    text-shadow: -1px -1px 3px #000000;
    font-weight: bold;
  }
  
  section {

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    
    h2 {
      text-shadow: -1px -1px 5px #000000;
      font-style: italic;
    }
    button {
      height: 30px;
      width: 70px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    button {
      background-color: #98FB98;
      margin-top: 15px;
      height: 40px;
      font-size: 18px;
    }
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
      text-shadow: -1px -1px 7px #000;
    }
  }
`