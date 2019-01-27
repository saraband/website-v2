import React from 'react';
import styled, { keyframes } from 'styled-components'
import FontSizes from '../../constants/FontSizes'
import Colors from '../../constants/Colors';
import PropTypes from 'prop-types';

const FadeUp = keyframes`
  from {
    top: 100%;
  } to {
    top: 0;
  }
`;

const Container = styled.div`
  display: inline-block;
  position: relative;
  font-size: ${FontSizes.HUGE};
`;

const ShadowContent = styled.div`
  display: block;
  width: ${p => p.fill}%;
  height: 100%;
  position: relative;
  overflow: hidden;
  padding: 10px;
`;

const Hide = styled.div`
  opacity: 0;
`;

const Content = styled.div`
  display: inline-block;
  position: absolute;
  top: 100%;
  left: 0;
  animation: ${FadeUp} 1.2s cubic-bezier(0.2, 0.6, 0.2, 1) forwards;
  animation-delay: ${p => p.delay + 0.3}s;
  z-index: 50;
  padding: 10px;
`;

const FillContainer = styled.span`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${p => p.bgColor};
  animation: ${FadeUp} 1.2s cubic-bezier(0.2, 0.6, 0.2, 1) forwards;
  animation-delay: ${p => p.delay}s;
  z-index: 45;
`;

export default class Title extends React.PureComponent {
  render () {
    const {
      children,
      delay,
      bgColor,
      fill,
      ...rest
    } = this.props;
    // MESSY !!! TODO
    return (
      <Container {...rest}>
        <ShadowContent fill={fill}>
          <Hide>{children}</Hide>
          <Content delay={delay}>{children}</Content>
          <FillContainer bgColor={bgColor} delay={delay} />
        </ShadowContent>
      </Container>
    );
  }
};

Title.propTypes = {
  fill: PropTypes.number,
  delay: PropTypes.number,
  bgColor: PropTypes.string
};

Title.defaultProps = {
  fill: 70,
  delay: 0,
  bgColor: Colors.LIGHT_TURQUOISE
};