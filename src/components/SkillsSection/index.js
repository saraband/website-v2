import React from 'react';
import styled from 'styled-components';
import Section from '../Section'
import FontSizes from '../../constants/FontSizes'
import { SectionTitle } from '../Title'
import Skills from './Skills'

const SkillsList = new Array(10).fill(1).map((_, index) => ({
  name: `Skill ${index}`,
  value: Math.floor(Math.random() * 50) + 50
}));

const Image = styled.div`
  width: 250px;
  height: 100%;
  background-color: blue;
  border: 1px solid red;
`;

const Content = styled.div`
  display: flex;
  border: 1px solid blue;
  background-color: lightblue;
  margin-left: 30px;
  margin-right: 30px;
`;

export default class extends React.PureComponent {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Section>
        <Content>
          <Skills skills={SkillsList} />
          <Image />
        </Content>
      </Section>
    );
  }
};
