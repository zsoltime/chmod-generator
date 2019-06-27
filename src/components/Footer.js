import React from 'react';
import styled from 'styled-components';

import { Wrapper } from './Common.style';

const Copyright = styled.p`
  font-size: 0.875rem;
  line-height: 1;
  margin: 0;
  text-align: center;
`;

const Footer = () => (
  <footer>
    <Wrapper>
      <Copyright>Created by Zsolt Meszaros</Copyright>
    </Wrapper>
  </footer>
);

export default Footer;
