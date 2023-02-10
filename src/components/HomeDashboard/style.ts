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
    @media (max-width: 550px) {
      padding: 30px 10px 30px 0;
    }


    h2 {
      font-size: 18px;
      font-style: italic;
      text-shadow: -1px -1px 5px #000000;
      cursor: pointer;
    }
    h2:hover {
      color: #49ccc1;
      text-shadow: -1px -1px 5px #fff;
      transition: 0.7s;
    }
    .exit:hover, .delete:hover {
      color: #FF4500;
      text-shadow: -1px -1px 5px #fff;
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
      min-width: 153px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 50px;

      .avatar {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 95px;
        height: 95px;
        margin: 0 auto;
        letter-spacing: 8px;
        background-color: #FF4500;
        border-radius: 50%;
        border: 2px solid #fff;
        font-size: 35px;
      }
      .avatar:hover {
        transform: scale(1.3);
        transition: 0.7s;
        border: 2px solid #FF4500;
        color: #FF4500;
        background-color: #F0E68C;
        cursor: pointer;
      }
      

      h3 {
        font-size: 11px;
      }
      h2 {
        font-size: 16px;
        word-wrap: break-word;
      }

      h2, h3 {
        font-style: italic;
        padding: 0 5px;
      }
      h2:hover, h3:hover {
        color: #FF4500;
        transition: 0.2s;
      }

    }

    .no-itens {
      justify-content: center;
    }

    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      width: 100%;
      height: 99%;
      border-radius: 10px;
      padding: 20px;
      gap: 50px;

      overflow-x: hidden;

      @media (max-width: 636px) {
        justify-content: center;

        li {
          width: 245px;
          min-width: 190px;
          height: 150px;
          justify-content: center;

          .box-div-btn {
            width: 100%;
            justify-content: center;
          }
        }
      }
      @media (min-width: 900px) {
        margin: 0 auto;
        justify-content: center;
      }

      li {
        display: flex;
        flex-direction: column;
        padding: 10px;
        margin: 0;
        gap: 20px;
        border: 1px solid #ffffff;
        border-radius: 5px;
        text-shadow: -1px -1px 3px #000000;
        padding: 30px;


        background-color: #F0E68C;

        h3 {
          font-size: 14px;
          word-wrap: break-word;
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

          @media (max-width: 400px) {
            flex-direction: column;

            
            .box-btns {
              flex-direction: row;
              
              button {
                width: 4rem;
              }
            }
          }

          .box-number-date {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          button {
            border: none;
            height: 20px;
            width: 3rem;
            border-radius: 5px;

            font-size: 10px;
            font-weight: bold;
            background-color: #49ccc1;
            color: #ffffff;
            text-shadow: -1px -1px 2px #000000;
          }
        }
        .box-btns {
          display: flex;
          flex-direction: column;
          gap: 5px;

          .exit {
            background-color: #FF4500;
          }
        }
      }
      @media (min-width: 500px) {
        li:hover {
          transform: scale(1.2);
          transition: 0.5s;
          border: 1px solid #FF4500;
        }
      }
    }
  }
`