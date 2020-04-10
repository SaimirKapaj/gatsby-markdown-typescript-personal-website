import React from 'react';

import Container from 'components/utils/Container';

import MainNav from './MainNav';
import Logo from './Logo';

import * as Styled from './styles';

interface Props {
  siteTitle: string;
}

/**
 * Header component
 *
 * @param {Props} props
 */
const Header: React.FC<Props> = ({ siteTitle }) => (
  <Styled.Header>
    <Container>
      <Logo />
      <MainNav />
    </Container>
  </Styled.Header>
);

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
