// stories/InputField.stories.tsx
import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import InputField from './InputField';

const meta = {
  title: 'components/InputField',
  component: InputField,
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    placeholder: 'Enter text',
    value: '',
    onChangeText: action('onChangeText'),
    isError: false,
    errorMessage: '',
  },
};

export const WithError: Story = {
  args: {
    placeholder: 'Enter text',
    value: '',
    onChangeText: action('onChangeText'),
    isError: true,
    errorMessage: 'This field is required',
  },
};

export const WithTitle: Story = {
  args: {
    placeholder: 'Enter text',
    value: '',
    onChangeText: action('onChangeText'),
    titleText: 'Username',
    isError: false,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Enter text',
    value: '',
    onChangeText: action('onChangeText'),
    editable: false,
  },
};
