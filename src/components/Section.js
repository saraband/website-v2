import React, { Fragment } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: f5f5f5;
  max-width: 1200px;
  margin: auto;
  position: relative;
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
