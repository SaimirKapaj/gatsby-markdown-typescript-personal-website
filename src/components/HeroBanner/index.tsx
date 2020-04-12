import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/utils/Container';
import Button from 'components/utils/Button';
import TitleSection from 'components/utils/TitleSection';

import * as Styled from './styles';

interface Props {
  title: string;
  description: React.ReactNode;
  linkTo: string;
  linkText: string;
}

/**
 * Hero Banner component
 *
 * @param {Props} props
 */
const HeroBanner: React.FC<Props> = ({ title, description, linkTo, linkText }) => (
  <Styled.HeroBanner>
    <Container section>
      <TitleSection text={title} />
      <Styled.Description>{description}</Styled.Description>
      <Link to={linkTo}>
        <Button primary>{linkText}</Button>
      </Link>
    </Container>
  </Styled.HeroBanner>
);

export default HeroBanner;
