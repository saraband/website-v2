import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Landing from '../components/Landing';
import Layout from '../components/layout';
import './index.css';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer'

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
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </Layout>
        <Footer />
      </div>
    );
  }
}

export default IndexPage
