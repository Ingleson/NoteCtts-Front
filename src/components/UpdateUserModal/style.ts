import styled from "styled-components";

export const UpdateModal = styled.div`
  z-index: 4;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,.25);

  section {
    animation: zoomIn 1s;
    width: 30%;
    min-width: 300px;

    border: 1px solid #fff;
    border-radius: 5px;

    .base-div-modal{
      width: 100%;
      height: 400px;
      background-color: #F0E68C;

      text-shadow: -1px -1px 3px #000000;

      
      header {
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding: 20px 30px;
        align-items: center;
        font-style: italic;

        button {
          font-weight: bold;
          font-size: 20px;
          width: 30px;
          height: 30px;
          background-color: #49ccc1;
          border: none;
          border-radius: 5px;
          color: #fff;
        }
        button:hover {
          background-color: #FF4500;
        }
      }

      form {
        display: flex;
        flex-direction: column;
        padding: 0 30px;
        gap:15px;

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
        }
        button {
          width: 40%;
          height: 2rem;
          margin: 0 auto;

          background-color: #49ccc1;
          color: #fff;

          border: none;
          border-radius: 5px;

          font-style: italic;
        }
        button:hover {
          background-color: #FF4500;
        }
      }
    }
  }
`