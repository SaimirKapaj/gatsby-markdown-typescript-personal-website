import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Banner from 'components/utils/Banner';

import { SectionTitle } from 'helpers/definitions';

interface SectionHeroBanner extends SectionTitle {
  content: string;
  linkTo: string;
  linkText: string;
}

const HeroBanner: React.FC = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          sections {
            heroBanner {
              title
              subtitle
              content
              linkTo
              linkText
            }
          }
        }
      }
    }
  `);

  const heroBanner: SectionHeroBanner = site.siteMetadata.sections.heroBanner;

  return (
    <Banner
      title={heroBanner.title}
      subtitle={heroBanner.subtitle}
      content={heroBanner.content}
      linkTo={heroBanner.linkTo}
      linkText={heroBanner.linkText}
    />
  );
};

export default HeroBanner;
