import React from 'react';
import styled from 'styled-components';

import { Wrapper } from './Common.style';

const Logo = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;
  letter-spacing: -0.125rem;
  line-height: 1;
  margin: 0;
  text-align: center;

  span {
    font-weight: 400;
    letter-spacing: -0.175rem;
  }
`;

const Header = () => (
  <header>
    <Wrapper>
      <Logo>
        <span>CHMOD</span> Generator
      </Logo>
    </Wrapper>
  </header>
);

export default Header;
