import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  display: inline-block;
  cursor: pointer;
  padding: 10px;
  text-shadow: 0 -2px rgba(0, 0, 0, 0.1);
  
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