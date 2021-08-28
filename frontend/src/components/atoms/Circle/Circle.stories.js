import React from 'react';
import Circle from './Circle';

export default {
  title: 'Circle',
  component: Circle,
};

const Template = ({ ...args }) => <Circle {...args} />;

export const Default = Template.bind({});

Default.args = {};
