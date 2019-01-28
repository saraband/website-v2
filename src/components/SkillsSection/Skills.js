import React, { memo } from 'react';
import styled from 'styled-components';
import Section from '../Section'
import FontSizes from '../../constants/FontSizes'

const Container = styled.div`
  background-color: lightblue;
  margin-left: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: row;
`;

const SkillContainer = styled.div`
  width: 100%;
  background-color: darkslateblue;
  color: white;
  position: relative;
  margin-bottom: 20px;
  margin-left: -30px;
  
  &:first-child {
    margin-top: 20px;
  }
`;

const SkillName = styled.div`
  color: white;
  font-size: ${FontSizes.MEDIUM};
  padding: 5px;
  z-index: 50;
  position: relative;
`;

const SkillFilling = styled.div`
  position: absolute;
  top: 0;
  z-index: 45;
  background-color: darkolivegreen;
  height: 100%;
  width: ${p => p.filling}%;
`;

const Image = styled.div`
  width: 250px;
  height: 100% !important;
  background-color: darkslateblue;
  border: 1px solid red;
`;

const SkillsListContainer = styled.div`
  border: 1px solid red;
  flex-grow: 1;
`;

const SkillBar = memo(({ name, value }) => (
  <SkillContainer>
    <SkillName>{name}</SkillName>
    <SkillFilling filling={value} />
  </SkillContainer>
));

export default class extends React.PureComponent {
  constructor (props) {
    super(props);
  }

  render () {
    const {
      skills,
      ...rest
    } = this.props;

    return (
      <Container {...rest}>
        <SkillsListContainer>
          {skills.map(({ name, value}) => (
            <SkillBar
              key={name}
              name={name}
              value={value}
              />
          ))}
        </SkillsListContainer>
        <Image></Image>
      </Container>
    );
  }
};
