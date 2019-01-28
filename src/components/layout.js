import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar/index';
import Landing from '../components/Landing';
import Footer from '../components/Footer'
/*import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'*/

const StyledLayout = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
`;

const Body = styled.div`
  flex-grow: 1;
`;

export default ({ children }) => (
  <StyledLayout>
    <Body>
      <Landing />
      <NavBar />
      {children}
      <Footer />
    </Body>
  </StyledLayout>
);