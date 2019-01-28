import React, { memo } from 'react';
import styled from 'styled-components';
import Section from '../Section'
import FontSizes from '../../constants/FontSizes'
import Colors from '../../constants/Colors'
import { BoxShadow } from '../../misc/styles'

const Container = styled.div`
  width: 100%;
`;

const SkillContainer = styled.div`
  width: 100%;
  background-color: ${Colors.RED};
  color: white;
  position: relative;
  margin-bottom: 20px;
  margin-left: -30px;
  ${BoxShadow}
  
  &:first-child {
    margin-top: 20px;
  }
`;

const SkillName = styled.div`
  color: white;
  font-size: ${FontSizes.MEDIUM};
  padding: 5px 15px;
  z-index: 50;
  position: relative;
  font-weight: normal;
  font-family: 'Roboto';
`;

const SkillFilling = styled.div`
  position: absolute;
  top: 0;
  z-index: 45;
  background-color: rgba(0, 0, 0, 0.2);
  height: 100%;
  width: ${p => p.filling}%;
`;

const SkillsListContainer = styled.div`
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
      </Container>
    );
  }
};
