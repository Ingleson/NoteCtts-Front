import styled from "styled-components";
import "animate.css"

export const BaseDash = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  animation: fadeIn 3s;

  header {
    width: 100%;
    height: 70px;
    background-color: #F0E68C;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 50px;
    border-bottom: 2px solid #ffffff;

    h2 {
      font-size: 18px;
      font-style: italic;
      text-shadow: -1px -1px 5px #000000;
      cursor: pointer;
    }
    h2:hover {
      opacity: 80%;
    }
  }
  
  main {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 89%;

    aside {
      border-right: 1px solid;
      width: 30%;
      max-width: 30%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 50px;

      h3 {
        font-size: 11px;
      }
      h2 {
        font-size: 16px;
      }

      h2, h3 {
        font-style: italic;
      }

    }

    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 99%;
      border-radius: 10px;
      padding: 20px;
      gap: 50px;

      overflow-x: hidden;

      li {
        display: flex;
        flex-direction: column;
        padding: 20px;
        gap: 20px;
        text-shadow: -1px -1px 3px #000000;

        background-color: #F0E68C;

        h3 {
          font-size: 14px;
        }
        span {
          font-size: 12px;
        }

        .box-name-email {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .box-div-btn {
          display: flex;
          align-items: center;
          flex-direction: row;
          gap: 10px;

          .box-number-date {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          button {
            border: none;
            height: 30px;
            width: 3rem;
            margin-top: 5px;
            border-radius: 5px;

            font-size: 10px;
            font-weight: bold;
            background-color: #49ccc1;
            color: #ffffff;
            text-shadow: -1px -1px 2px #000000;
          }
        }
      }
    }
  }
`