// stories/MyButton.stories.tsx
import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {MyButton} from '../components/Button';

const meta = {
  title: 'components/MyButton',
  component: MyButton,
} satisfies Meta<typeof MyButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    text: 'Hello World',
    color: 'purple',
    onPress: action('onPress'),
    textColor: 'red',
  },
};

export const WithIcon: Story = {
  args: {
    text: '😀 😎 👍 💯',
    color: 'purple',
    onPress: action('onPress'),
    textColor: 'red',
  },
};
