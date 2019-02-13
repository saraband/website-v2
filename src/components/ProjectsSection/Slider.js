import React from 'react';
import styled, { css } from 'styled-components';
import FontSizes from '../../constants/FontSizes'
import { BoxShadow, NoSelect } from '../../misc/styles'
import ArrowRightSVG from '../../images/arrow-right.svg';
import ArrowLeftSVG from '../../images/arrow-left.svg';
import Colors from '../../constants/Colors'

const ArrowLeft = styled.img.attrs({
  src: ArrowLeftSVG
})`
  margin: 0;
  display: block;
`;

const ArrowRight = styled.img.attrs({
  src: ArrowRightSVG
})`
  margin: 0;
  display: block;
`;

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  padding-bottom: 16.5%;
  padding-top: 16.5%;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.2);
`;

const SlidesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${p => p.numSlides * 100}%;
  margin-left: -${p => p.currentSlide * 100}%;
  height: 100%;
  display: flex;
  flex-direction: row;
  transition: all 0.5s ease-in-out;
`;

const Slide = styled.div`
  flex-grow: 1;
  background-color: ${Colors.LIGHT_TURQUOISE};
  background-image: url(${p => p.background});
  background-repeat: no-repeat;
  background-size: cover;
  
  &:nth-child(even) {
    background-color: yellow;
  }
`;

const Controls = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 50;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
`;

const ControlButton = styled.div`
  padding: 10px;
  background-color: white;
  cursor: pointer;
  filter: grayscale(100%);
  transition: all 0.2s ease-in-out;
  border: 1px solid rgba(0, 0, 0, 0.2);
  ${NoSelect}
  
  &:hover {
    filter: grayscale(0%);
    ${BoxShadow}
  }
`;

export default class extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      currentSlide: 0
    };
  }

  previousSlide = () => {
    const { currentSlide } = this.state;
    const { slides } = this.props;

    this.setState({
      currentSlide: currentSlide - 1 < 0
        ? slides.length - 1
        : currentSlide - 1
    });
  }

  nextSlide = () => {
    const { currentSlide } = this.state;
    const { slides } = this.props;

    this.setState({
      currentSlide: currentSlide + 1 > slides.length - 1
        ? 0
        : currentSlide + 1
    });
  }

  render () {
    const {
      slides,
      ...rest
    } = this.props;
    const { currentSlide } = this.state;

    return (
      <Container {...rest}>
        <Controls>
          <ControlButton onClick={this.previousSlide}><ArrowLeft /></ControlButton>
          <ControlButton onClick={this.nextSlide}><ArrowRight /></ControlButton>
        </Controls>
        <SlidesContainer
          currentSlide={currentSlide}
          numSlides={slides.length}
          >
          {slides.map((slide, index) => (
            <Slide
              key={index}
              background={slide}
              />
          ))}
        </SlidesContainer>
      </Container>
    );
  }
};
