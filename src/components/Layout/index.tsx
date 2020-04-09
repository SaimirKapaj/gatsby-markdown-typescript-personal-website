import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from 'components/Header';
import Footer from 'components/Footer';

import 'assets/styles/global.css';
import GlobalStyles from 'assets/styles/globalStyles';
import * as Styled from './styles';

interface Props {
  children: React.ReactNode;
}

/**
 * Layout component
 *
 * @param {Props} props
 */
const Layout: React.FC<Props> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyles />
      <Styled.Layout>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Styled.MainWrapper>{children}</Styled.MainWrapper>
        <Footer />
      </Styled.Layout>
    </>
  );
};

export default Layout;
