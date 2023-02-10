import styled from "styled-components";

export const DeleteModal = styled.div`
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

    .base-div-modal{
      width: 100%;
      height: 200px;
      background-color: #F0E68C;
      border-radius: 5px;
      border: 1px solid #fff;

      text-shadow: -1px -1px 3px #000000;

      h2 {
        padding-top: 30px;
      }

      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        gap: 20px;
        height: 50%;

        button {
          width: 8rem;
          height: 3rem;
          border: none;
          border-radius: 5px;
          color: #fff;
          font-size: 14px;
          font-style: italic;
          font-weight: bold;
          text-shadow: -1px -1px 3px #000000;
        }
        .voltar {
          background-color: #49ccc1;
        }
        .excluir {
          background-color: #FF6347;
        }
      }

    }
  }
`