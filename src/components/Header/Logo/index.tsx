import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import * as Styled from './styles';

/**
 * Logo component
 */
const Logo: React.FC = () => {
  const { site, placeholderImage } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      placeholderImage: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Styled.Logo to="/">
      <Styled.Image>
        <Img fluid={placeholderImage.childImageSharp.fluid} alt={site.siteMetadata.title} />
      </Styled.Image>
      <Styled.Text>{site.siteMetadata.title}</Styled.Text>
    </Styled.Logo>
  );
};

export default Logo;
