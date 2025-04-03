// stories/InputField.stories.tsx
import type {Meta, StoryObj} from '@storybook/react';
import BreadCrumbs from '../components/Breadcrumbs';
import BreadCrumbsSource from '!!raw-loader!../../src/components/Breadcrumbs.tsx';

const meta = {
  title: 'components/BreadCrumbs',
  component: BreadCrumbs,
} satisfies Meta<typeof BreadCrumbs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleBreadcrumbs: Story = {
  parameters: {
    design: {
      type: 'figma',
      //   url: 'https://www.figma.com/design/PSFRpbxufurIGDgKTG31Lw/Nuvance-Health---Myca?node-id=15-935&t=dvxZT1DMGnfhsFTG-4',
    },
    docs: {
      source: {
        language: 'tsx',
        type: 'code',
        code: BreadCrumbsSource,
        of: BreadCrumbs,
        dark: false,
      },
    },
  },
};
