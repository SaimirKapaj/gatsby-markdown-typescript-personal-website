import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

import { SectionTitle } from 'helpers/definitions';

import Container from 'components/utils/Container';
import TitleSection from 'components/utils/TitleSection';
import Carousel from 'components/Carousel';
import FormatHtml from 'components/utils/FormatHtml';

import * as Styled from './styles';

interface Testimonial {
  node: {
    id: string;
    html: string;
    frontmatter: {
      title: string;
      cover: {
        childImageSharp: {
          fluid: FluidObject | FluidObject[] | undefined;
        };
      };
    };
  };
}

const Testimonials: React.FC = () => {
  const { site, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          sections {
            testimonials {
              title
              subtitle
            }
          }
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
                  fluid(maxWidth: 80) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = site.siteMetadata.sections.testimonials;
  const testimonials: Testimonial[] = allMarkdownRemark.edges;

  return (
    <Styled.Testimonials>
      <Container section>
        <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
        <Styled.Wrapper>
          <Carousel>
            {testimonials.map((item) => {
              const {
                id,
                html,
                frontmatter: { cover, title }
              } = item.node;

              return (
                <div key={id}>
                  <Styled.Testimonial>
                    <Styled.Image>
                      <Img fluid={cover.childImageSharp.fluid} alt={title} />
                    </Styled.Image>
                    <Styled.Title>{title}</Styled.Title>
                    <FormatHtml content={html} />
                  </Styled.Testimonial>
                </div>
              );
            })}
          </Carousel>
        </Styled.Wrapper>
      </Container>
    </Styled.Testimonials>
  );
};

export default Testimonials;
