import React from 'react'
import { NavLink } from 'react-router-dom';
import Styled from 'styled-components';

const PageNavigation = ({title}) => {
  return (
    <Wrapper>
        <NavLink to = "/">Home</NavLink>/{title}
    </Wrapper>
  )
}
const Wrapper = Styled.section`
height: 10rem ;
background-color : ${({ theme }) => theme.colors.bg};
display: flex;
Justify-content : flex-start;
align-items: center;
font-size: 3.2rem;
padding-left: 1.2 rem;

a {
    font-size: 3rem;
}
`;

export default PageNavigation;