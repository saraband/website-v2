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
import FaviconPNG from '../images/favicon.png';
import { Helmet } from 'react-helmet';

const Title = styled.h1``;

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
`;

class IndexPage extends React.Component {
  render () {
    return (
      <Layout>
        <Helmet>
          <title>Yassine Hermellin - Portfolio</title>
          <link rel='icon' type='image/png' href={FaviconPNG} sizes='32x32' />
        </Helmet>
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </Layout>
    );
  }
}

export default IndexPage
