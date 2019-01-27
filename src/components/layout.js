import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
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
/*  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />*/
  <StyledLayout>
    <NavBar />
    <Body>
      {children}
    </Body>
  </StyledLayout>
);