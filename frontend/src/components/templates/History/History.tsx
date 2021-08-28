import React, { useState } from 'react';
import { CVI, JavascriptRacingCarPreview } from '../../../assets/image';
import { Month } from '../../../types';
import { Button } from '../../atoms';
import { Tabs } from '../../molecules';
import { Project } from '../../organisms';
import { Container, Title, TabsWrapper, TabDescription } from './History.styles';

const History = () => {
  const [selectedTab, setSelectedTab] = useState<string>('2021');

  return (
    <Container>
      <Title>History</Title>
      <TabsWrapper>
        <Tabs
          tabList={['2021', '2020', '2019', '2018']}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </TabsWrapper>
      <TabDescription>{selectedTab}에 한 일 </TabDescription>
      <Project
        startMonth={Month.FEB}
        endMonth={Month.APR}
        src={JavascriptRacingCarPreview}
        title="Javascript RacingCar"
        description="코로나19의 백신 정보 및 접종 후기를 자유롭게 공유하는 플랫폼입니다."
      />
      <Project
        endMonth={Month.JUN}
        src={CVI}
        title="백신 중앙 정보원"
        description="코로나19의 백신 정보 및 접종 후기를 자유롭게 공유하는 플랫폼입니다."
      />
    </Container>
  );
};

export default History;
