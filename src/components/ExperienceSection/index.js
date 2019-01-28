import React from 'react';
import styled from 'styled-components';
import Section from '../Section'
import FontSizes from '../../constants/FontSizes'

const Content = styled.div`
  background-color: lightblue;
  min-height: 300px;
`;

export default class extends React.PureComponent {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Section>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum, dolor eget consectetur dictum, neque urna scelerisque diam, hendrerit gravida nisi lacus at justo. Duis porttitor turpis faucibus odio convallis semper. Praesent euismod nunc egestas augue dictum vestibulum. Morbi blandit sapien quis elit ultrices ultrices.
        </Content>
      </Section>
    );
  }
};
