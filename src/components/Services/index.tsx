import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import InfoBlock from 'components/InfoBlock';
import Container from 'components/utils/Container';
import TitleSection from 'components/utils/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';
import { IconProps } from 'components/utils/Icon';

import { SectionTitle } from 'helpers/definitions';

import * as Styled from './styles';

interface Service {
  node: {
    id: string;
    html: string;
    frontmatter: {
      title: string;
      icon: IconProps;
    };
  };
}

const Services: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "testimonials section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "services" } } }, sort: { fields: fileAbsolutePath }) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              icon
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const services: Service[] = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      <Styled.Services>
        {services.map((item) => {
          const {
            id,
            html,
            frontmatter: { title, icon }
          } = item.node;

          return (
            <Styled.ServiceItem key={id}>
              <InfoBlock icon={icon} title={title} content={<FormatHtml content={html} />} />
            </Styled.ServiceItem>
          );
        })}
      </Styled.Services>
    </Container>
  );
};

export default Services;
