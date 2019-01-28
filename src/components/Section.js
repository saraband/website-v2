import React, { Fragment } from 'react';
import styled from 'styled-components';
import { SectionTitle } from './Title';
import PropTypes from 'prop-types';

const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const Container = styled.div`
  padding: 70px;
  background-color: #f5f5f5;
  
  /* Section title aligned to the right */
  ${TitleContainer} {
    justify-content: flex-end;
  }

  /* all even children have different background and title alignment */
  &:nth-child(even) {
    background-color: white;
    
    ${TitleContainer} {
      justify-content: flex-start;
    }
  }
`;

const WidthContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  border: 2px solid red;
`;

export default class Section extends React.PureComponent {
  render () {
    const {
      title,
      children,
      ...rest
    } = this.props;

    return (
      <Container {...rest}>
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

Section.propTypes = {
  title: PropTypes.string
};

Section.defaultProps = {
  title: 'Section title'
}
