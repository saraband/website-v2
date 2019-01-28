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

export default class extends React.PureComponent {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Section>
        <SectionTitle>Section title</SectionTitle>
        <Skills skills={SkillsList} />
      </Section>
    );
  }
};
