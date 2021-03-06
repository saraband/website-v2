import React from 'react';
import styled from 'styled-components';
import Section from '../Section'
import FontSizes from '../../constants/FontSizes'
import { SectionTitle } from '../Title'
import Skills from './Skills'
import Colors from '../../constants/Colors'
import { BoxShadow, NoSelect } from '../../misc/styles'
import Atom from '../Landing/Atom'

const SkillsList = [
  { name: 'React',                                              value: 97 },
  { name: 'Redux',                                              value: 96 },
  { name: 'VueJS',                                              value: 94 },
  { name: 'NodeJS',                                             value: 87 },
  { name: 'Express',                                            value: 89 },
  { name: 'GraphQL',                                            value: 91 },
  { name: 'Sequelize',                                          value: 89 },
  { name: 'Postgres',                                           value: 86 },
  { name: 'Adobe suite (Photoshop, Illustrator, Premiere',      value: 95 },
  { name: 'HTML/CSS',                                           value: 97 }
];

const Right = styled.div`
  width: 50%;
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
  margin-right: -30px;
  background-color: ${Colors.TURQUOISE_2};
  align-self: stretch;
  overflow: hidden;
  ${BoxShadow}
`;

const Content = styled.div`
  display: flex;
  background-color: ${Colors.DARK_WHITE};
  margin-left: 30px;
  margin-right: 30px;
`;

export default class extends React.PureComponent {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Section
        title='Skills & interests'
        anchor='skills-and-interests'
        >
        <Content>
          <Skills skills={SkillsList} />
          <Right>
            <Atom />
          </Right>
        </Content>
      </Section>
    );
  }
};
