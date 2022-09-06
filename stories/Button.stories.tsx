import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../src/components/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    children: {
      defaultValue: 'Click me',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { variant: 'primary' };

export const Secondary = Template.bind({});
Secondary.args = { variant: 'secondary', onClick: action('secondary clicked') };
