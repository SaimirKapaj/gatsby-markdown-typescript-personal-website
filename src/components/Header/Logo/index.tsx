import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Link, Image, Text } from './styles';

/**
 * Logo component
 */
const Logo = () => {
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
    <Link to="/">
      <Image>
        <Img fluid={placeholderImage.childImageSharp.fluid} alt={site.siteMetadata.title} />
      </Image>
      <Text>{site.siteMetadata.title}</Text>
    </Link>
  );
};

export default Logo;
