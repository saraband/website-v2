import React from 'react';
import styled from 'styled-components';
import Colors from '../../constants/Colors'

const Container = styled.p`
  background-color: ${Colors.DARK_TURQUOISE};
  color: ${Colors.WHITE}
  display: flex;
  justify-content: center;
  padding: 20px;
  font-weight: lighter !important;
  margin: 0;
  position: relative;
  box-shadow: 0px -5px 0px 0px rgba(0, 0, 0, 0.12);
`;

export default class extends React.PureComponent {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Container>
        All rights reserved &copy; Yassine Hermellin 2019
      </Container>
    );
  }
};
