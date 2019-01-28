import React, { Fragment } from 'react';
import styled from 'styled-components';
import { SectionTitle } from './Title';
import PropTypes from 'prop-types';

const TitleContainer = styled.div`
  display: flex;
  border: 1px solid red;
  margin-bottom: 30px;
`;

const Container = styled.div`
  padding: 70px;
  background-color: #f5f5f5;
  &:nth-child(even) {
    background-color: white;
    
    ${TitleContainer} {
      justify-content: flex-end;
    }
  }
`;

const WidthContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`;

export default class Section extends React.PureComponent {
  render () {
    const {
      title,
      children,
      ...rest
    } = this.props;

    return (
      <Container>
        <WidthContainer>
          <TitleContainer>
            <SectionTitle>{title}</SectionTitle>
          </TitleContainer>
          {children}
        </WidthContainer>
      </Container>
    );
  }
}

Section.PropTypes = {
  title: PropTypes.string
};

Section.defaultProps = {
  title: 'Section title'
}
