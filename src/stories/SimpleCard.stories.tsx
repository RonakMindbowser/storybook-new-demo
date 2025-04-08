// stories/InputField.stories.tsx
import type {Meta, StoryObj} from '@storybook/react';
import SimpleCard from '../components/SimpleCard';

const meta = {
  title: 'components/SimpleCard',
  component: SimpleCard,
} satisfies Meta<typeof SimpleCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicSimpleCard: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
    // docs: {
    //   source: {
    //     language: 'tsx',
    //     type: 'code',
    //     code: BreadCrumbsSource,
    //     of: BreadCrumbs,
    //     dark: false,
    //   },
    // },
  },
};
