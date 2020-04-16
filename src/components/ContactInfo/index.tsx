import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import InfoBlock from 'components/InfoBlock';
import Container from 'components/utils/Container';
import TitleSection from 'components/utils/TitleSection';
import { IconProps } from 'components/utils/Icon';

import { SectionTitle } from 'helpers/definitions';

import * as Styled from './styles';

interface Contact {
  node: {
    id: string;
    frontmatter: {
      title: string;
      content: string;
      icon: IconProps;
    };
  };
}

const ConctactInfo = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "contact section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "contact" } } }, sort: { fields: fileAbsolutePath }) {
        edges {
          node {
            id
            frontmatter {
              title
              icon
              content
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const contacts: Contact[] = allMarkdownRemark.edges;

  return (
    <Styled.ContactInfo>
      <Container section>
        <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
        {contacts.map((item) => {
          const {
            id,
            frontmatter: { title, icon, content }
          } = item.node;

          return (
            <Styled.ContactInfoItem key={id}>
              <InfoBlock icon={icon} title={title} content={content} center />
            </Styled.ContactInfoItem>
          );
        })}
      </Container>
    </Styled.ContactInfo>
  );
};

export default ConctactInfo;
