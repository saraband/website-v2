import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Landing from '../components/Landing';
import Layout from '../components/layout';
import './index.css';
// import Image from '../components/image';
import AboutSection from '../components/About';
import SkillsSection from '../components/SkillsAndInterests';

const Title = styled.h1``;

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
`;

class IndexPage extends React.Component {
  render () {
    return (
      <div>
        <Landing />
        <Layout>
          <AboutSection />
          <SkillsSection />
          <Section id='dongzong'>Hello</Section>
          <Section>Hello</Section>
        </Layout>
      </div>
    );
  }
}

export default IndexPage
