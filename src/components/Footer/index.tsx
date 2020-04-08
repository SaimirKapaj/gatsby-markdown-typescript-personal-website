import React from 'react';
import { FooterWrapper } from './styles';

/**
 * Footer component
 */
const Footer = () => (
  <FooterWrapper>
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
  </FooterWrapper>
);

export default Footer;
