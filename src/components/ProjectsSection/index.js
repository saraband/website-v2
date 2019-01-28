import React from 'react';
import styled from 'styled-components';
import Section from '../Section'
import FontSizes from '../../constants/FontSizes'

const Content = styled.div`
  border: 1px solid red;
  min-height: 500px;
`;

export default class extends React.PureComponent {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Section>
        <Content>
        </Content>
      </Section>
    );
  }
};
