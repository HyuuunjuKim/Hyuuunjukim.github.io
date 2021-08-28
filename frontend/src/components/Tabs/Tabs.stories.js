import Tabs from './Tabs';

export default {
  title: 'Tabs',
  component: Tabs,
};

const Template = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabList: ['2021', '2020', '2019', '2018'],
  selectedTab: '2021',
  setSelectedTab: () => console.log('click tab'),
};
