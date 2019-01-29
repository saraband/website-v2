import React from 'react';
import styled from 'styled-components';
import { WidthContainer } from '../Section'
import NavLink from './NavLink'
import Colors from '../../constants/Colors'
import { BoxShadow } from '../../misc/styles'
import LogoSVG from '../../images/logo.svg'

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${Colors.DARK_TURQUOISE};
  color: white;
  z-index: 9999;
  ${BoxShadow}
`;

const MenuContainer = styled(WidthContainer)`
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const Left = styled.div`
`;
const Right = styled.div`
  display: flex;
`;

const LogoLink = styled(NavLink).attrs({
  href: '/'
})`
  padding: 0 10px;
`;

const Logo = styled.img.attrs({
  src: LogoSVG,
  alt: 'Home'
})`
  height: 45px;
  margin: 0;
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
            <LogoLink to='/'><Logo /></LogoLink>
          </Left>
          <Right>
            <NavLink href='#about'>About</NavLink>
            <NavLink href='#projects'>Projects</NavLink>
            <NavLink href='#contact'>Contact</NavLink>
          </Right>
        </MenuContainer>
      </Container>
    );
  }
};
