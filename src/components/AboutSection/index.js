import React from 'react';
import styled from 'styled-components';
import Section from '../Section'
import FontSizes from '../../constants/FontSizes'
import { SectionTitle } from '../Title'

const Top = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

const ImageContainer = styled.div`
  position: relative;
  top: 0;
  left: -50px;
  height: 100%;
  width: 30%;
`;

const Image = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 100%;
  padding-bottom: 25%;
  padding-top: 25%;
  position: absolute;
`;

const Content = styled.div`
  background-color: white;
  height: 300px;
  margin-left: 30px;
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: row;
`;

const Right = styled.div`
  border: 1px solid red;
  flex-grow: 1;
`;

export default class extends React.PureComponent {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Section
        title='About'
        anchor='about'
        position='right'
        >
        <Content>
          <ImageContainer>
            <Image />
          </ImageContainer>
          <Right>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum, dolor eget consectetur dictum,
            neque urna scelerisque diam, hendrerit gravida nisi lacus at justo. Duis porttitor turpis faucibus odio
            convallis semper. Praesent euismod nunc egestas augue dictum vestibulum. Morbi blandit sapien quis elit
            ultrices ultrices.
          </Right>
        </Content>
      </Section>
    );
  }
};
