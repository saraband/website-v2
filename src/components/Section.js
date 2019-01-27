import React, { Fragment } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: 
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