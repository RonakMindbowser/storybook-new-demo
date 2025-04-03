// stories/InputField.stories.tsx
import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Tab from '../components/Tab';
import TabSource from '!!raw-loader!../../src/components/Tab.tsx';

const meta = {
  title: 'components/Tab',
  component: Tab,
} satisfies Meta<typeof Tab>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleTab: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/PSFRpbxufurIGDgKTG31Lw/Nuvance-Health---Myca?node-id=15-935&t=dvxZT1DMGnfhsFTG-4',
    },
    docs: {
      source: {
        language: 'tsx',
        type: 'code',
        code: TabSource,
        of: Tab,
        dark: false,
      },
    },
  },
};
