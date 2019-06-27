import React from 'react';
import { mount } from 'enzyme';

import withTheme from './withTheme';

describe('withTheme HOC', () => {
  it('wraps component in <ThemeProvider /> with default theme', () => {
    const Button = () => <button>Click Me</button>;
    const WrappedButton = withTheme(Button);
    const wrapper = mount(<WrappedButton />);

    expect(wrapper).toMatchSnapshot();
  });

  it('accepts a custom theme', () => {
    const Button = () => <button>Click Me</button>;
    const theme = { test: true };
    const WrappedButton = withTheme(Button, theme);
    const wrapper = mount(<WrappedButton />);

    expect(wrapper.find('ThemeProvider').prop('theme')).toMatchObject(
      theme
    );
  });

  it('passes props to wrapped component', () => {
    const Greeting = props => (
      <p>
        Hello, <span>{props.username}</span>!
      </p>
    );
    const username = 'john_doe';
    const WrappedGreeting = withTheme(Greeting);
    const wrapper = mount(<WrappedGreeting username={username} />);

    expect(wrapper.find('span').text()).toBe(username);
  });
});
