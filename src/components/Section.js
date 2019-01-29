import React, { Fragment } from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import PropTypes from 'prop-types';

const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const Container = styled.div`
  padding: 70px;
  background-color: #f5f5f5;
  position: relative;
  
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

export const WidthContainer = styled.div`
  max-width: 1024px;
  margin: auto;
  position: relative;
`;

const HiddenAnchor = styled.div`
  position: absolute;
  opacity: 0;
  z-index: -1;
  top: -45px; /* navbar height */
`;

export default class Section extends React.PureComponent {
  render () {
    const {
      title,
      children,
      anchor,
      position,
      ...rest
    } = this.props;

    return (
      <Container {...rest}>
        <HiddenAnchor id={anchor}/>
        <WidthContainer>
          <TitleContainer>
            <SectionTitle position={position} anchor={anchor}>
              {title}
            </SectionTitle>
          </TitleContainer>
          {children}
        </WidthContainer>
      </Container>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string,
  position: PropTypes.string,
  anchor: PropTypes.string.isRequired
};

Section.defaultProps = {
  title: 'Section title',
  position: 'left'
}
