import React from 'react';
import styled from 'styled-components';
import FontSizes from '../../constants/FontSizes'
import Slider from './Slider'

const Container = styled.div`
  border: 1px solid blue;
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  
  &:nth-child(even) {
    flex-direction: row-reverse;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const Description = styled.div`
  border: 1px solid red;
  flex-grow: 1;
`;

const TagsList = styled.ul`
  list-style-type: none;
`;

const Tag = styled.li`
  display: inline-block;
  border: 1px solid red;
  margin: 5px;
  padding: 5px;
`;

const StyledSlider = styled(Slider)`
  flex-shrink: 0;
  width: 60%;
  height: 30vh;
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
          <h4>{title}</h4>
          <p>{description}</p>
          <TagsList>{tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)}</TagsList>
        </Description>
        <StyledSlider slides={screenshots} />
      </Container>
    );
  }
};
