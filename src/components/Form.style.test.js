import React from 'react';
import { mount, render } from 'enzyme';
import 'jest-styled-components';

import { Checkbox } from './Form.style';
import withTheme from './withTheme';

describe('<Form />', () => {
  describe('<Checkbox />', () => {
    it('matches snapshot', () => {
      const CheckboxWithTheme = withTheme(Checkbox);
      const wrapper = render(<CheckboxWithTheme />);

      expect(wrapper).toMatchSnapshot();
    });

    it('handles changes in checked state', () => {
      const handleChange = jest.fn();
      const CheckboxWithTheme = withTheme(Checkbox);
      const wrapper = mount(
        <CheckboxWithTheme onChange={handleChange} />
      );

      wrapper.find('input').simulate('change');

      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('displays correct checkbox state', () => {
      const CheckboxWithTheme = withTheme(Checkbox);
      const wrapper = render(
        <CheckboxWithTheme checked={true} onChange={f => f} />
      );

      expect(wrapper.find('input + div')).toMatchSnapshot();
    });
  });
});
