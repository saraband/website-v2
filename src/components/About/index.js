import React from 'react';
import styled from 'styled-components';
import Section from '../Section'
import FontSizes from '../../constants/FontSizes'
import SectionTitle from '../SectionTitle'

export default class extends React.PureComponent {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Section>
        <SectionTitle>About</SectionTitle>
      </Section>
    );
  }
};