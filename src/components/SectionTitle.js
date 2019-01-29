import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Colors from '../constants/Colors'

const Container = styled.div`
  display: inline-block;
  background-color: ${Colors.LIGHT_TURQUOISE};
  position: relative;
  padding: 0;
`;

const Anchor = styled.a`
  color: ${Colors.LIGHT_GREY};
  margin-right: 10px;
  cursor: pointer;
  text-decoration: none;
  opacity: 0.5;
  
  &:hover {
    opacity: 1;
  }
`;

const Title = styled.h1`
  position: relative;
  left: ${p => p.position === 'left' ? '40px' : '-40px'};
  top: -50%;
  margin: 0;
  color: ${Colors.GREY};
`;

export default class SectionTitle extends React.PureComponent {
  render () {
    const {
      children,
      position,
      anchor,
      ...rest
    } = this.props;

    return (
      <Container {...rest}>
        <Title position={position}>
          <Anchor href={`#${anchor}`}>#</Anchor>
          {children}
        </Title>
      </Container>
    );
  }
}

SectionTitle.propTypes = {
  position: PropTypes.string,
  anchor: PropTypes.string.isRequired,
};

SectionTitle.defaultProps = {
  position: 'left'
}