import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

export const FadeIn = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${p => p.zIndex};
  animation: ${FadeIn} 3s forwards linear;
  animation-delay: 1.5s;
  opacity: 0;
`;

const getRandomRotationKeyframes = () => {
  const randomDeg = Math.floor(Math.random() * 360);
  return keyframes`
    from {
      transform: translate3d(-50%, -50%, 0) rotate(${randomDeg}deg);
    } to {
      transform: translate3d(-50%, -50%, 0) rotate(${randomDeg + 359}deg);
    }
  `;
}

const CircleContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  top: 50%;
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  transform: translate3d(-50%, -50%, 0);
  animation: ${p => p.rotationKeyframes} ${p => Math.random() * 5 + 10}s linear infinite;
  opacity: ${p => p.opacity};
`;

const BigCircle = styled.div`
  position: absolute;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  top: 50%;
  border: 2px solid white;
  border-radius: 100%;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;

const LittleCircle = styled.div`
  position: absolute;
  background-color: white;
  border-radius: 100%;
  left: 0;
  top: 50%;
  border-radius: 100%;
  height: ${p => p.size / 10}px;
  width: ${p => p.size / 10}px;
  transform: translate3d(-50%, -50%, 0);
`;

export default class Atom extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      maxSize: 0
    };
  }

  componentDidMount () {
    if (!this.state.maxSize) {
      this.setState({
        maxSize: Math.min(window.innerWidth, window.innerHeight) / 1.3
      })
    }
  }

  render () {
    const {
      numCircles,
      ...rest
    } = this.props;
    const { maxSize } = this.state;

    if (!maxSize) {
      return null;
    }

    return (
      <Container {...rest}>
        {new Array(numCircles).fill(1).map((_, index) => {
          const ratio = (index + 1) / numCircles;

          return (
            <CircleContainer
              size={maxSize * ratio}
              opacity={(1 - ratio) * 0.5 + 0.25}
              ratio={ratio}
              rotationKeyframes={getRandomRotationKeyframes()}
              >
              <BigCircle />
              <LittleCircle
                size={maxSize / 2}
                ratio={ratio}
                />
            </CircleContainer>
          );
        })}
      </Container>
    );
  }
}

Atom.propTypes = {
  numCircles: PropTypes.number
};

Atom.defaultProps = {
  numCircles: 5
};