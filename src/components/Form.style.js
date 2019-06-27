import React from 'react';
import styled from 'styled-components';

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CheckIcon = styled.svg`
  fill: none;
  stroke: #fff;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2px;
`;

const InputCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  align-items: center;
  background-color: ${props =>
    props.checked
      ? props.theme.checkboxChecked
      : props.theme.checkbox};
  border: 2px solid ${props => props.theme.border};
  border-radius: 0.25rem;
  display: flex;
  height: 1.25rem;
  justify-content: center;
  margin-right: 0.5rem;
  transition: background-color ${props => props.theme.transitionEase},
    border-color ${props => props.theme.transitionEase};
  width: 1.25rem;

  ${InputCheckbox}:focus + & {
    border-color: ${props => props.theme.focusRing};
  }

  ${CheckIcon} {
    pointer-events: none;
    stroke-dasharray: 16px;
    stroke-dashoffset: ${props => (props.checked ? 0 : '16px')};
    transition: ${props => props.theme.transitionEase};
    user-select: none;
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`;

export const Checkbox = ({ checked, className, ...props }) => (
  <CheckboxContainer className={className}>
    <InputCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <CheckIcon
        aria-hidden="true"
        height="10px"
        viewBox="0 0 12 10"
        width="12px"
      >
        <polyline points="1.5 6 4.5 9 10.5 1" />
      </CheckIcon>
    </StyledCheckbox>
  </CheckboxContainer>
);

export const Fieldset = styled.fieldset`
  border: 0;
  display: flex;
  flex: 0 1 100px;
  margin: 0;
  padding: 0;
`;

export const Form = styled.form`
  background-color: ${props => props.theme.form};
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  max-width: 420px;
  padding: 1rem;
`;

export const Label = styled.label`
  align-items: center;
  display: flex;
  margin-bottom: 1rem;
`;

export const Legend = styled.legend`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  padding: 0;
  text-align: center;
`;
