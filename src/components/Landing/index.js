import React from 'react';
import styled, { keyframes } from 'styled-components'
import FontSizes from '../../constants/FontSizes'
import Colors from '../../constants/Colors';
import GreyShadesBackground from './GreyShadesBackground'
import Title from '../Title';
import { FadeIn } from './Atom';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  * {
    font-family: 'Roboto';
  }
`;

const Name = styled(Title).attrs({
  fill: 120
})`
  font-size: ${FontSizes.BIG};
  color: ${Colors.TURQUOISE};
`;

const JobTitle = styled(Title).attrs({
  fill: 100,
  delay: 0.5,
  bgColor: Colors.WHITE
})`
  font-size: ${FontSizes.LARGE};
  color: ${Colors.GREY};
  font-weight: 200;
`;

const ScrollContainer = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: ${p => p.direction};
  justify-content: ${p => p.justify};
  align-items: ${p => p.align};
`;

const ScrollTitle = styled(Title).attrs({
  fill: 100,
  delay: 0.8,
  bgColor: 'transparent'
})`
  font-size: ${FontSizes.LARGE};
  color: ${Colors.WHITE};
  font-weight: 100;
`;

const DownTitle = styled(Title).attrs({
  fill: 100,
  delay: 1.3,
  bgColor: Colors.WHITE
})`
  font-size: ${FontSizes.LARGE};
  color: ${Colors.GREY};
  font-weight: 100;
`;

const MouseScroll = styled.div`
  margin-left: 15px;
  border: 2px solid white;
  border-radius: 20px;
  width: 30px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: ${FadeIn} 1s linear forwards;
  animation-delay: 1s;
`;

const MouseWheel = styled.div`
  width: 40%;
  height: 40%;
  border-radius: 20px;
  background-color: ${Colors.TURQUOISE};
`;

export default class Index extends React.PureComponent {
  render () {
    return (
      <GreyShadesBackground>
        <Container>
          <div>
            <Name>Yassine Hermellin</Name><br />
            <JobTitle>Javascript developper</JobTitle>
          </div>
          <ScrollContainer>
            <Flex direction='column'>
              <ScrollTitle>Scroll</ScrollTitle>
              <DownTitle>down</DownTitle>
            </Flex>
            <MouseScroll><MouseWheel /></MouseScroll>
          </ScrollContainer>
        </Container>
      </GreyShadesBackground>
    );
  }
};