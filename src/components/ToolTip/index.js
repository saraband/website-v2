import React from 'react';
import styled from 'styled-components'
import Colors from '../../constants/Colors'

const Container = styled.div`
  position: relative;
  border: 1px solid red;
`;

const Tip = styled.div`
  position: absolute;
  width: 100%;
  padding: 10px;
  top: -100%;
  transform: translate3d(0, -5px, 0);
  color: ${Colors.WHITE};
  background-color: ${Colors.GREY};
  
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0) rotate(45deg);
    background-color: ${Colors.GREY};
    width: 9px;
    height: 9px;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex; /* TODO: this is not good practice */
  
  &:hover {
    ${Tip} {
      opacity: 1;
    }
  }
`;

export default class ToolTip extends React.PureComponent {
  render () {
    const {
      tip,
      children,
      ...rest
    } = this.props;

    return (
      <Container {...rest}>
        <Tip>{tip}</Tip>
        <Content>{children}</Content>
      </Container>
    );
  }
}

// TODO: add proptypes