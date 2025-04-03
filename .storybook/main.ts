/** @type{import("@storybook/react-webpack5").StorybookConfig} */
module.exports = {
  stories: [
    // '../components/**/*.stories.mdx',
    '../src/stories/*.stories.?(ts|tsx|js|jsx)',
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-webpack5-compiler-babel',
    '@chromatic-com/storybook',
    '@storybook/addon-react-native-web',
    '@storybook/addon-designs',
    '@storybook/addon-storysource',
    '@storybook/addon-docs', // 👈 Also add this
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  docs: {
    autodocs: true,
    toc: true, // 👈 Enables the table of contents
    defaultName: 'Documentation',
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  // webpack: config => {
  //   config.module.rules.push({
  //     test: /\.tsx?$/,
  //     use: 'raw-loader',
  //   });
  //   return config;
  // },
  rules: [
    {
      test: /\.tsx?$/,
      use: 'raw-loader',
    },
  ],
};
