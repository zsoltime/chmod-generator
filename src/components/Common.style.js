import styled from 'styled-components';

export const Lead = styled.p`
  font-size: 1.25rem;
  margin: 0 0 1rem;
`;

export const Main = styled.main`
  min-height: calc(100vh - 3.5rem - 1.875rem);
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  padding: 0.5rem 1rem;
  width: 100%;
`;
