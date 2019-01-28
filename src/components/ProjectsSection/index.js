import React from 'react';
import styled from 'styled-components';
import Section from '../Section'
import FontSizes from '../../constants/FontSizes'
import Project from './Project'

const Content = styled.div`
  border: 1px solid red;
  min-height: 500px;
  display: flex;
  flex-direction: column;
`;

const hotBoxData = {
  title: 'Title',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum urna eu rhoncus scelerisque. Nullam sit amet diam luctus, lacinia nulla sit amet, bibendum velit.',
  tags: ['Tag', 'Tag', 'Tag', 'Tag', 'Tag', 'Tag', 'Tag', 'Tag'],
  screenshots: []
};
const nuageData = hotBoxData;

export default class extends React.PureComponent {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Section>
        <Content>
          <Project data={hotBoxData} />
          <Project data={nuageData} />
        </Content>
      </Section>
    );
  }
};
