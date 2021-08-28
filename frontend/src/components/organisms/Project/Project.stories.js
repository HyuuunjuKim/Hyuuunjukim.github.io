import React from 'react';
import Project from './Project';
import { CVI } from '../../../assets/image';
import { MonitorAlign } from '../../../types';

export default {
  title: 'Project ',
  component: Project,
};

const Template = ({ ...args }) => <Project {...args} />;

export const MonitorAlignLeft = Template.bind({});
export const MonitorAlignRight = Template.bind({});

MonitorAlignLeft.args = {
  src: CVI,
  title: '백신 중앙 정보원',
  description: '하하하하하 너무 졸리당 ㅜ',
};

MonitorAlignRight.args = {
  monitorAlign: MonitorAlign.RIGHT,
  src: CVI,
  title: '백신 중앙 정보원',
  description: '하하하하하 너무 졸리당 ㅜ',
};
