import React from 'react';
import styled from 'styled-components';
import FontSizes from '../../constants/FontSizes'

const Container = styled.div`
  background-color: blue;
  opacity: 0.3;
`;

export default class extends React.PureComponent {
  constructor (props) {
    super(props);
  }

  render () {
    const {
      ...rest
    } = this.props;

    return (
      <Container {...rest}>
        Slider
      </Container>
    );
  }
};
