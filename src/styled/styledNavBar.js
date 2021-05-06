import styled from 'styled-components';
export const StyledNavBar = styled.div`
  .Nav {
    margin: 0;
    padding: 1rem;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #0074d5;
    display: flex;
    justify-content: left;
    z-index: 1;
    align-items: center;
    width: 100%;
    font-size: 1rem;
    height: 40px;
  }
  .nav-link {
    transition: all 0.2s linear;
    margin-right: 2rem;
    padding-bottom: 0.2rem;
    position: relative;
    color: #eeeeee;
    text-transform: uppercase;
    text-decoration: none;
  }
  .nav-link:hover {
    color: white;
  }

  .text.nav-link:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  .nav-link:hover:after {
    width: 100%;
    left: 0;
  }
`;
