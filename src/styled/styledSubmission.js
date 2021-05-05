import styled from 'styled-components';
export const StyledSubmission = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    border-style: solid, 3;
    padding: 1rem;
    row-gap: 1rem;
    align-items: center;
    button {
      width: fit-content;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 0.8rem;
      padding: 0.4rem;
      align-items: center;
      color: #d5573b;
      background-color: white;
      border-radius: 0.9rem;
      border: none;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      transition: all 0.2s linear;
    }
    button:hover {
      transform: scale(1.03);
      background-color: #f5f5f5;
      cursor: pointer;
    }
  }
`;
