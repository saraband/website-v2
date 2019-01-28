import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: grey;
  min-height: 500px;
`;

export default class extends React.PureComponent {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Container></Container>
    );
  }
};
