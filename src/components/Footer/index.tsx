import React from 'react';
import * as Styled from './styles';

/**
 * Footer component
 */
const Footer = () => (
  <Styled.Footer>
    <div>
      Built with{' '}
      <a href="https://www.gatsbyjs.org" rel="noreferrer noopener" target="_blank">
        Gatsby
      </a>{' '}
      by <span className="font-semibold">Saimir Kapaj</span>
    </div>
    <a
      href="https://github.com/SaimirKapaj/gatsby-redux-toolkit-typescript-starter"
      rel="noreferrer noopener"
      target="_blank"
    >
      GitHub
    </a>{' '}
  </Styled.Footer>
);

export default Footer;
