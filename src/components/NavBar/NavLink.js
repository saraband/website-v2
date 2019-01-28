import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  display: inline-block;
  cursor: pointer;
  padding: 20px;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export default class NavLink extends React.PureComponent {
  render () {
    const {
      children,
      ...rest
    } = this.props;

    return (
      <StyledLink {...rest}>{children}</StyledLink>
    );
  }
}