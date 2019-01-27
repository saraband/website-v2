import React, { Fragment } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  &:nth-child(odd) {
    background-color: red;
  }
`;
export default class extends React.PureComponent {
  render () {
    return (
      <Container>
        {this.props.children}
      </Container>
    );
  }
};