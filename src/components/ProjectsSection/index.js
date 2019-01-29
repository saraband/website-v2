import React from 'react';
import styled from 'styled-components';
import Section from '../Section'
import FontSizes from '../../constants/FontSizes'
import Project from './Project'

const Content = styled.div`
  min-height: 500px;
  display: flex;
  flex-direction: column;
`;

const hotBoxData = {
  title: 'HotBox',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum urna eu rhoncus scelerisque. Nullam sit amet diam luctus, lacinia nulla sit amet, bibendum velit.',
  tags: ['React', 'GraphQL', 'Redux', 'Sequelize', 'Postgres'],
  screenshots: [],
  githubUrl: 'https://github.com/saraband/demo-delivery-app',
  liveDemoUrl: 'https://github.com/saraband/demo-delivery-app'
};
const nuageData = hotBoxData;

export default class extends React.PureComponent {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Section
        title='Projects'
        anchor='projects'
        >
        <Content>
          <Project data={hotBoxData} />
          <Project data={nuageData} />
        </Content>
      </Section>
    );
  }
};
