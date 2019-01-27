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
  font-size: ${FontSizes.LARGE};
  border: 1px solid red;
`;

const ShadowContent = styled.div`
  display: block;
  width: 70%;
  height: 100%;
  position: relative;
  overflow: hidden;
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
  animation-delay: 0.3s;
  z-index: 50;
`;

const FillContainer = styled.span`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${Colors.LIGHT_TURQUOISE};
  animation: ${FadeUp} 1.2s cubic-bezier(0.2, 0.6, 0.2, 1) forwards;
  z-index: 45;
`;

export default class SectionTitle extends React.PureComponent {
  render () {
    const {
      children,
      direction,
      ...rest
    } = this.props;

    // TODO refactor with <Title> ?
    return (
      <Container {...rest}>
        <ShadowContent>
          <Hide>{children}</Hide>
          <Content>{children}</Content>
          <FillContainer />
        </ShadowContent>
      </Container>
    );
  }
};

SectionTitle.propTypes = {
  direction: PropTypes.string
};

SectionTitle.defaultProps = {
  direction: 'right'
};