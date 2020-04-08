import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from 'components/Header';
import Footer from 'components/Footer';

import 'assets/styles/global.css';
import GlobalStyles from 'assets/styles/globalStyles';
import { LayoutWrapper, MainWrapper } from './styles';

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
      <LayoutWrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
        <MainWrapper>{children}</MainWrapper>
        <Footer />
      </LayoutWrapper>
    </>
  );
};

export default Layout;
