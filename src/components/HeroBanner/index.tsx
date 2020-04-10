import React from 'react';
import { Link } from 'gatsby';

import Button from 'components/utils/Button';

import * as Styled from './styles';

interface Props {
  title: string;
  description: React.ReactNode;
  linkTo: string;
  linkText: string;
}

const HeroBanner: React.FC<Props> = ({ title, description, linkTo, linkText }) => (
  <Styled.HeroBanner>
    <Styled.Wrapper>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Description>{description}</Styled.Description>
      <Link to={linkTo}>
        <Button primary>{linkText}</Button>
      </Link>
    </Styled.Wrapper>
  </Styled.HeroBanner>
);

export default HeroBanner;
