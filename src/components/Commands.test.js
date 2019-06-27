import React from 'react';
import { render } from 'enzyme';

import Commands from './Commands';

describe('<Commands />', () => {
  it('displays default octal and symbolic values', () => {
    const defaultOctal = '000';
    const defaultSymbolic = '----------';
    const wrapper = render(<Commands />);

    expect(
      wrapper
        .find('span')
        .first()
        .text()
    ).toBe(defaultOctal);
    expect(
      wrapper
        .find('span')
        .last()
        .text()
    ).toBe(defaultSymbolic);
  });

  it('displays passed octal and symbolic values', () => {
    const octal = '644';
    const symbolic = '-rw-r--r--';
    const wrapper = render(
      <Commands octal={octal} symbolic={symbolic} />
    );

    expect(wrapper.find('span').length).toBe(2);
    expect(
      wrapper
        .find('span')
        .first()
        .text()
    ).toBe(octal);
    expect(
      wrapper
        .find('span')
        .last()
        .text()
    ).toBe(symbolic);
  });
});
