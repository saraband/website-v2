import React from 'react';
import styled from 'styled-components';
import Section from '../Section'
import Project from './Project'

const Content = styled.div`
  min-height: 500px;
  display: flex;
  flex-direction: column;
`;

const hotBoxData = {
  title: 'HotBox',
  description: 'This demo app emulates partially a food delivery website. It consists in a Express server hooked to a PostgreSQL database through Sequelize. The client application uses mainly React and is connected to the server with Apollo.',
  tags: ['React', 'GraphQL', 'Redux', 'Sequelize', 'Postgres'],
  githubUrl: 'https://github.com/saraband/demo-delivery-app',
  liveDemoUrl: 'https://hotbox-demo.herokuapp.com/',
  screenshots: [
    require('../../images/hotbox_0.jpg'),
    require('../../images/hotbox_1.jpg'),
    require('../../images/hotbox_2.jpg')
  ]
};

const nuageData = {
  title: 'Nuage',
  description: 'Image upload platform. Work in progress',
  tags: ['React', 'GraphQL', 'Redux', 'Sequelize', 'Postgres'],
  githubUrl: null,
  liveDemoUrl: null,
  screenshots: []
};

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
