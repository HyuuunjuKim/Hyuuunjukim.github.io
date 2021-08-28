import React from 'react';
import { Container, buttonCSS, selectedButtonCSS } from './Tabs.styles';
import { PALETTE } from '../../constants';
import { ButtonBackgroundType } from '../../types';
import Button from '../Button/Button';

interface Props {
  tabList: [];
  selectedTab?: string;
  setSelectedTab?: (arg0: string) => void;
}

const Tabs = ({ tabList, selectedTab = '', setSelectedTab }: Props) => (
  <Container>
    {tabList.map((tab) => (
      <Button
        key={tab}
        type="button"
        backgroundType={ButtonBackgroundType.TEXT}
        color={PALETTE.GRAY_300}
        isSelected={selectedTab === tab}
        css={selectedTab === tab ? selectedButtonCSS : buttonCSS}
        onClick={() => setSelectedTab(tab)}
      >
        {tab}
      </Button>
    ))}
  </Container>
);

export default Tabs;
