import styled from 'styled-components';
export const StyledList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ul {
    padding: 0;
  }
  .sortBtn {
    width: fit-content;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.9rem;
    padding: 0.4rem;
    align-items: center;
    color: #439ae2;
    background-color: white;
    border-radius: 0.5rem;
    border-style: solid;
    border-color: #439ae2;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.3s linear;
    margin: 0.5rem;

    p {
      display: inline-block;
      margin: 0;
    }
  }
  .sortBtn:hover {
    transform: scale(1.01);
    background-color: #72b3e9;
    cursor: pointer;
    color: #f8f9fa;
  }
`;
