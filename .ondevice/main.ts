// import {StorybookConfig} from '@storybook/react-native';

const main = {
  stories: ['../src/stories/*.stories.?(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-ondevice-notes',
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-backgrounds',
    '@storybook/addon-ondevice-actions',
    '@storybook/addon-designs',
    '@storybook/addon-storysource',
    '@storybook/addon-docs', // 👈 Also add this
  ],
};

export default main;
