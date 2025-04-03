import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds';
import {Preview} from '@storybook/react';
import DocumentationTemplate from './DocumentationTemplate.mdx';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'plain',
      values: [
        {name: 'plain', value: 'white'},
        {name: 'warm', value: 'hotpink'},
        {name: 'cool', value: 'deepskyblue'},
      ],
    },
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      // page: DocumentationTemplate,
      toc: true, // 👈 Enables the table of contents
    },
  },
  decorators: [withBackgrounds],
};

export default preview;
