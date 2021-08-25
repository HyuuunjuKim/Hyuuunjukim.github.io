import GlobalStyles from '../src/GlobalStyles';
import { configure, addDecorator } from '@storybook/react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((story) => (
  <>
    <GlobalStyles />
    {story()}
  </>
));

configure(require.context('../src', true, /\.stories\.js?$/), module);
