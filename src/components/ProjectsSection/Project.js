import React from 'react';
import styled from 'styled-components';
import FontSizes from '../../constants/FontSizes'
import Slider from './Slider'

const StyledSlider = styled(Slider)`
  flex-shrink: 0;
  width: 60%;
  height: 30vh;
  margin-right: -50px;
`;

const Description = styled.div`
  flex-grow: 1;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: stretch;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
  padding: 20px;
  margin-right: 30px;
  background-color: grey;
  
  &:nth-child(even) {
    flex-direction: row-reverse;
    margin-right: 0 !important;
    margin-left: 30px;
    
    ${StyledSlider} {
      margin-right: unset;
      margin-left: -50px;
    }
    
    ${Description} {
      margin-right: unset;
      margin-left: 20px;
    }
    
    margin-right: 20px;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const TagsList = styled.ul`
  list-style-type: none;
`;

const DescriptionContent = styled.div``;

const Tag = styled.li`
  display: inline-block;
  margin: 5px;
  padding: 5px;
`;

const DescriptionButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SourceButton = styled.a`
  text-decoration: none;
  border: 2px solid black;
  font-size: ${FontSizes.MEDIUM};
  color: black;
  padding: 10px;
  margin-right: 20px;
  flex-grow: 1;
  background-color: transparent;
  cursor: pointer;
  text-align: center;
`;

const DemoButton = styled(SourceButton)`
  margin-right: 0;
  border: 2px solid red;
  color: white;
  background-color: red;
`;

const DescriptionTitle = styled.h4`
  font-size: ${FontSizes.VERY_LARGE};
`;

export default class extends React.PureComponent {
  constructor (props) {
    super(props);
  }

  render () {
    const {
      data: {
        title,
        description,
        tags,
        screenshots
      },
      ...rest
    } = this.props;

    return (
      <Container {...rest}>
        <Description>
          <DescriptionContent>
            <DescriptionTitle>{title}</DescriptionTitle>
            <p>{description}</p>
            <TagsList>{tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)}</TagsList>
          </DescriptionContent>
          <DescriptionButtons>
            <SourceButton>See source</SourceButton>
            <DemoButton>Live demo</DemoButton>
          </DescriptionButtons>
        </Description>
        <StyledSlider slides={new Array(5).fill(1)} />
      </Container>
    );
  }
};
