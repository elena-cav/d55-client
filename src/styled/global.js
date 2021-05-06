import styled from 'styled-components';
export const Global = styled.div`
  margin-top: 3rem;
  padding: 1.5rem;
  background-color: #f8f9fa;
  min-height: 100vh;
  width: 100&;
  display: flex;
  justify-content: center;

  a:-webkit-any-link {
    text-decoration: none;
  }

  li {
    list-style: none;
  }
  ul {
    padding: 0;
  }
  .ring div div {
    border-top-color: #0074d5;
    position: relative;
    top: 100%;
  }
`;
