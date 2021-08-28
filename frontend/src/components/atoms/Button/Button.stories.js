import React from 'react';
import { ButtonBackgroundType } from '../../../types';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

const Template = ({ ...args }) => <Button {...args} />;

export const Filled = Template.bind({});
export const Outline = Template.bind({});
export const Text = Template.bind({});

Filled.args = {
  backgroundType: ButtonBackgroundType.FILLED,
  children: 'Filled',
};

Outline.args = {
  backgroundType: ButtonBackgroundType.OUTLINE,
  children: 'Outline',
};

Text.args = {
  backgroundType: ButtonBackgroundType.TEXT,
  children: 'Text',
};
