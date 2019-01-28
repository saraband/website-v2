import React from 'react';
import styled, { keyframes } from 'styled-components'
import FontSizes from '../constants/FontSizes'
import Colors from '../constants/Colors';
import { getFadeUpKeyframes } from '../misc/keyframes'
import PropTypes from 'prop-types';

export const TITLE_TYPE = {
  LANDING: 'landing',
  SECTION: 'section'
};

const FadeUp = getFadeUpKeyframes({});
const FadeUpBackgroundSection = getFadeUpKeyframes({ to: 40 });
const Container = styled.div`
  display: inline-block;
  position: relative;
  font-size: ${FontSizes.HUGE};
  overflow: hidden;
`;

const Hidden = styled.div`
  opacity: 0;
  padding: ${p => p.type === TITLE_TYPE.LANDING
    ? '10px'
    : '0'
  };
`;

const Content = styled.div`
  display: inline-block;
  position: absolute;
  top: 100%;
  left: 0;
  animation: ${FadeUp} 1.2s cubic-bezier(0.2, 0.6, 0.2, 1) forwards;
  animation-delay: ${p => p.delay + 0.3}s;
  z-index: 50;
  padding: ${p => p.type === TITLE_TYPE.LANDING
    ? '10px'
    : '0 0 50px 20px'
  };
`;

const Background = styled.span`
  position: absolute;
  top: 100%;
  left: 0;
  height: 100%;
  background-color: ${p => p.bgColor};
  animation-delay: ${p => p.delay}s;
  z-index: 45;

  animation: ${p => p.type === TITLE_TYPE.SECTION
    ? FadeUpBackgroundSection
    : FadeUp
  } 1.2s cubic-bezier(0.2, 0.6, 0.2, 1) forwards;

  width: ${p => p.type === TITLE_TYPE.SECTION
    ? '60%'
    : '100%'
  };
`;

export default class Title extends React.PureComponent {
  render () {
    const {
      children,
      delay,
      type,
      bgColor,
      ...rest
    } = this.props;

    return (
      <Container {...rest}>
        <Hidden type={type}>
          {children}
        </Hidden>
        <Content
          delay={delay}
          type={type}
          >
          {children}
        </Content>
        <Background
          bgColor={bgColor}
          type={type}
          delay={delay}
          />
      </Container>
    );
  }
};

Title.propTypes = {
  bgColor: PropTypes.string,
  delay: PropTypes.number,
  type: PropTypes.string
};

Title.defaultProps = {
  bgColor: Colors.LIGHT_TURQUOISE,
  delay: 0,
  type: 'landing'
};

// Variation for sections
export const SectionTitle = styled(Title).attrs({
  type: TITLE_TYPE.SECTION
})`
  font-size: ${FontSizes.VERY_LARGE};
  color: ${Colors.LIGHT_GREY};
`;
