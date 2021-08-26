import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import Loadable from '@loadable/component';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';

import { SectionTitle } from 'helpers/definitions';

import * as Styled from './styles';

const Carousel = Loadable(() => import('components/ui/Carousel'));

interface Testimonial {
  node: {
    id: string;
    html: string;
    frontmatter: {
      title: string;
      cover: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      };
    };
  };
}

const Testimonials: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "testimonials section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "testimonials" } } }) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              cover {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
                }
              }
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const testimonials: Testimonial[] = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      <Styled.Testimonials>
        <Carousel>
          {testimonials.map((item) => {
            const {
              id,
              html,
              frontmatter: { cover, title }
            } = item.node;

            return (
              <Styled.Testimonial key={id}>
                <Styled.Image>
                  <GatsbyImage image={cover.childImageSharp.gatsbyImageData} alt={title} />
                </Styled.Image>
                <Styled.Title>{title}</Styled.Title>
                <FormatHtml content={html} />
              </Styled.Testimonial>
            );
          })}
        </Carousel>
      </Styled.Testimonials>
    </Container>
  );
};

export default Testimonials;
