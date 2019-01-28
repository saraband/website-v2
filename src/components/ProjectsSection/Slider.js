import React from 'react';
import styled from 'styled-components';
import FontSizes from '../../constants/FontSizes'
import { NoSelect } from '../../misc/styles'

const Container = styled.div`
  background-color: blue;
  opacity: 0.7;
  border: 1px solid red;
  position: relative;
  overflow: hidden;
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
  background-color: green;
  
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
`;

const ControlButton = styled.div`
  padding: 10px;
  background-color: white;
  cursor: pointer;
  
  ${NoSelect}
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

    console.log(currentSlide)
    this.setState({
      currentSlide: currentSlide - 1 < 0
        ? slides.length - 1
        : currentSlide - 1
    });
  }

  nextSlide = () => {
    const { currentSlide } = this.state;
    const { slides } = this.props;

    console.log(currentSlide)
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
          <ControlButton onClick={this.previousSlide}>Previous</ControlButton>
          <ControlButton onClick={this.nextSlide}>Next</ControlButton>
        </Controls>
        <SlidesContainer
          currentSlide={currentSlide}
          numSlides={5}
          >
          {slides.map((_, index) => <Slide key={index} />)}
        </SlidesContainer>
      </Container>
    );
  }
};
