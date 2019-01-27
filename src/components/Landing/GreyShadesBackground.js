import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import Atom from './Atom'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 500;
`;

const getKeyframes = (top, bottom, index) => keyframes`
  from {
    ${
      // TODO: a bit messy
      index === 0
        ? `clip-path: polygon(0 0, ${top}% 0, ${bottom}% 100%, 0 100%);`
        : `clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);`
    }
  } to {
    clip-path: polygon(0 0, ${top}% 0, ${bottom}% 100%, 0 100%);
  }
`;


const GreyShade = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${p => p.bgColor};
  z-index: ${p => p.index};
  filter: brightness(${p => 70 + p.ratio * 30}%);
  animation: ${p => getKeyframes(p.top, p.bottom, p.index)} 1s forwards cubic-bezier(0.19, 1, 0.22, 1);
  animation-delay: ${p => 1 - p.ratio}s;

  /* TODO: messy */
  clip-path: polygon(0 0, ${p => p.index === 0 ? 100 : 0}% 0, ${p => p.index === 0 ? 100 : 0}% 100%, 0 100%);
`;

export default class GreyShadesBackground extends React.PureComponent {
  render () {
    const {
      children,
      color,
      numShades,
      ...rest
    } = this.props;

    return (
      <Container {...rest}>
        <Content>
          {children}
        </Content>

        {/* shade slides */}
        {new Array(numShades).fill(1).map((_, index) => {
          // The lighter the slide, the more it takes space
          const ratio = 1 - ((index + 1) / numShades);
          const top = index === 0
            ? 100
            : 30 + (ratio * 100);
          const bottom = index === 0
            ? 100
            : 5 + (ratio * 40);

          return (
            <GreyShade
              key={index}
              index={index}
              ratio={ratio}
              bgColor={color}
              top={top}
              bottom={bottom}
              />
          );     
        })}

        {/* atom */}
        <Atom zIndex={numShades + 1}/>
      </Container>
    );
  }
}

GreyShadesBackground.propTypes = {
  color: PropTypes.string,
  numShades: PropTypes.number
};

GreyShadesBackground.defaultProps = {
  // Lighter value
  color: '#464c4f',
  numShades: 5
};