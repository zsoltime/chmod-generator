const defaultTheme = {
  black: '#363636',
  blue: '#5c88f2',
  green: '#42a148',
  grey: '#3a3a3a',
  lightGrey: 'rgba(0, 0, 0, 0.3)',
  lighterGrey: 'rgba(0, 0, 0, 0.1)',
  maxWidth: '600px',
  offWhite: '#f1f1ec',
  transitionEase: '0.2s ease-in-out',
  white: 'rgba(255, 255, 255, .9)',
};

export const lightTheme = {
  ...defaultTheme,
  background: defaultTheme.offWhite,
  border: defaultTheme.lighterGrey,
  checkbox: defaultTheme.white,
  checkboxChecked: defaultTheme.green,
  focusRing: defaultTheme.black,
  form: defaultTheme.white,
  link: defaultTheme.green,
  placeholder: defaultTheme.lightGrey,
  text: defaultTheme.black,
};

export const darkTheme = {
  ...defaultTheme,
  background: defaultTheme.grey,
  border: defaultTheme.lighterGrey,
  checkbox: defaultTheme.lightGrey,
  checkboxChecked: defaultTheme.green,
  focusRing: defaultTheme.white,
  form: defaultTheme.black,
  link: defaultTheme.green,
  placeholder: defaultTheme.lightGrey,
  text: defaultTheme.white,
};

export default lightTheme;
