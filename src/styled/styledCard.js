import styled from 'styled-components';
export const StyledCard = styled.div`
  .card {
    display: flex;
    flex-direction: column;
    row-gap: 0.6em;
    font-size: 1rem;
    border-style: solid;
    border-radius: 0.5rem;
    margin: 0.5rem;
    padding: 0.5rem;
    border-color: #2b8ede;
    align-items: center;
  }
  .editBtn {
    text-align: center;
    width: 10rem;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.9rem;
    padding: 0.4rem;
    align-items: center;
    color: #439ae2;
    background-color: white;
    border-radius: 0.5rem;
    border: 1px solid #439ae2;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.3s linear;
    margin: 0.5rem;
  }
  .editBtn:hover {
    background-color: #72b3e9;
    cursor: pointer;
    color: #f8f9fa;
  }
  form {
    border-style: solid;
    margin-top: 3rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-color: #2b8ede;
    button {
      width: 10rem;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 0.9rem;
      padding: 0.4rem;
      align-items: center;
      color: white;
      background-color: #439ae2;
      border-radius: 0.5rem;
      border: none;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      transition: all 0.3s linear;
      margin: 0.5rem;
    }
    button:hover {
      background-color: #72b3e9;
      cursor: pointer;
      color: #f8f9fa;
    }
  }
  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 0.5rem;
  }
  input {
    height: 2rem;
    font-size: 1rem;
    margin: 0.5rem 0 0.5rem 0;
    padding: 0.2rem;
  }
  p {
    color: #737996;
    margin: 0;
  }
`;
