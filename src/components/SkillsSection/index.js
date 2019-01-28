import React from 'react';
import styled from 'styled-components';
import Section from '../Section'
import FontSizes from '../../constants/FontSizes'
import { SectionTitle } from '../Title'
import Skills from './Skills'
import Colors from '../../constants/Colors'

const SkillsList = [
  { name: 'React',                                              value: 90 },
  { name: 'Redux',                                              value: 80 },
  { name: 'VueJS',                                              value: 75 },
  { name: 'NodeJS',                                             value: 80 },
  { name: 'Express',                                            value: 75 },
  { name: 'GraphQL',                                            value: 75 },
  { name: 'Sequelize',                                          value: 70 },
  { name: 'Postgres',                                           value: 70 },
  { name: 'Adobe suite (Photoshop, Illustrator, Premiere',      value: 90 },
  { name: 'HTML/CSS',                                           value: 90 }
];

const Image = styled.div`
  width: 45%;
  height: 100%;
  background-color: blue;
  border: 1px solid red;
  align-self: stretch;
`;

const Content = styled.div`
  display: flex;
  background-color: ${Colors.DARK_WHITE};
  margin-left: 30px;
  margin-right: 30px;
  border: 1px solid blue;
`;

export default class extends React.PureComponent {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Section title='Skills & interests'>
        <Content>
          <Skills skills={SkillsList} />
          <Image />
        </Content>
      </Section>
    );
  }
};
