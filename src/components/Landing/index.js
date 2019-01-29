import React from 'react';
import styled, { keyframes } from 'styled-components'
import FontSizes from '../../constants/FontSizes'
import Colors from '../../constants/Colors';
import GreyShadesBackground from './GreyShadesBackground'
import Title, { Content,Background } from '../Title';
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

  /* TODO: css messy */
    font-family: 'Roboto';
  }
`;

const Name = styled(Title)`
  font-size: ${FontSizes.BIG};
  color: ${Colors.GREY};
  font-weight: bold;
  
  ${Background} {
    background-color: ${Colors.WHITE};
  }
`;

const JobTitle = styled(Title)`
  font-size: ${FontSizes.LARGE};
  color: ${Colors.DARK_TURQUOISE};
  font-weight: normal !important;
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

const ScrollTitle = styled(Title)`
  font-size: ${FontSizes.LARGE};
  color: ${Colors.WHITE};
  margin-bottom: 10px;
  
  * {
    font-weight: lighter;
    text-align: right;
  }
  
  ${Background} {
    background-color: transparent;
  }
`;

const DownTitle = styled(Title)`
  font-size: ${FontSizes.LARGE};
  color: ${Colors.DARK_TURQUOISE};
  font-weight: normal;
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
