import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Wrapper } from './Common.style';

const Display = styled.span`
  font-family: 'Source Code Pro', Monaco, courier, monospace;
  font-size: 2rem;
`;

const Div = styled.div`
  align-items: center;
  display: flex;
  font-size: 1.25rem;
  justify-content: space-between;
`;

const Commands = ({ octal, symbolic }) => (
  <Wrapper>
    <Div>
      Octal: <Display>{octal}</Display>
    </Div>
    <Div>
      Symbolic: <Display>{symbolic}</Display>
    </Div>
  </Wrapper>
);

Commands.defaultProps = {
  octal: '000',
  symbolic: '----------',
};

Commands.propTypes = {
  octal: PropTypes.string,
  symbolic: PropTypes.string,
};

export default Commands;
