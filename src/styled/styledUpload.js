import styled from 'styled-components';
export const StyledUpload = styled.div`
  button {
    width: fit-content;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.8rem;
    padding: 0.4rem;
    align-items: center;
    color: white;
    background-color: #439ae2;
    border-radius: 0.9rem;
    border: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s linear;
  }
  button:hover {
    transform: scale(1.03);
    background-color: grey;
    cursor: pointer;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    border-style: solid, 3;
    padding: 1rem;
    row-gap: 1rem;
    align-items: center;

    & label {
      color: #4f6d7a;
    }
    & textarea {
      max-width: 640px;
      min-width: 200px;

      @media screen and (min-width: 500px) {
        width: 380px;
      }

      @media screen and (min-width: 800px) {
        width: 600px;
      }
    }

    & p {
      margin: 0;
      font-size: 0.9rem;
      text-align: center;
      line-height: 1rem;
    }
  }
`;
