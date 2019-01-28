import React from 'react';
import styled from 'styled-components';
import { WidthContainer } from '../Section'
import NavLink from './NavLink'
import Colors from '../../constants/Colors'
import { BoxShadow } from '../../misc/styles'

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${Colors.RED};
  color: white;
  z-index: 9999;
  ${BoxShadow}
`;

const MenuContainer = styled(WidthContainer)`
  display: flex;
  padding: auto 70px !important;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const Left = styled.div`
`;
const Right = styled.div`
`;

export default class extends React.PureComponent {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Container>
        <MenuContainer>
          <Left>
            <NavLink to=''>Yassine Hermellin</NavLink>
          </Left>
          <Right>
            <NavLink to='about'>About</NavLink>
            <NavLink to='about'>Projects</NavLink>
            <NavLink to='about'>Contact</NavLink>
          </Right>
        </MenuContainer>
      </Container>
    );
  }
};
