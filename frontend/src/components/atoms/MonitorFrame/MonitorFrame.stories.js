import React from 'react';
import MonitorFrame from './MonitorFrame';
import { CVI } from '../../../assets/image';

export default {
  title: 'MonitorFrame ',
  component: MonitorFrame,
};

const Template = ({ ...args }) => <MonitorFrame {...args} />;

export const Default = Template.bind({});
export const WithImage = Template.bind({});

Default.args = {};
WithImage.args = {
  src: CVI,
};
