import React from 'react';
import styled, { keyframes } from 'styled-components'
import FontSizes from '../constants/FontSizes'
import Colors from '../constants/Colors';

const FadeUp = keyframes`
  from {
    top: 100%;
  } to {
    top: 0%;
  }
`;

const Container = styled.div`
  display: inline-block;
  position: relative;
  font-size: ${FontSizes.HUGE};
  overflow: hidden;
`;

const Hidden = styled.h1`
  display: inline-block;
  opacity: 0;
  font-size: ${FontSizes.LARGE};
  margin: 0;
  padding: 0;
`;

export const Content = styled(Hidden)`
  opacity: 1;
  display: inline-block;
  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;
  animation: ${FadeUp} 1.2s cubic-bezier(0.2, 0.6, 0.2, 1) forwards;
  animation-delay: 0.3s;
  z-index: 50;
`;

export const Background = styled.span`
  position: absolute;
  top: 100%;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${Colors.LIGHT_TURQUOISE};
  z-index: 45;
  animation: ${FadeUp} 1.2s cubic-bezier(0.2, 0.6, 0.2, 1) forwards;
`;

export default class Title extends React.PureComponent {
  render () {
    const {
      children,
      ...rest
    } = this.props;

    return (
      <Container {...rest}>
        <Hidden>{children}</Hidden>
        <Content>{children}</Content>
        <Background />
      </Container>
    );
  }
};