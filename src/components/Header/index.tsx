import React from 'react';

import MainNav from './MainNav';
import Logo from 'components/Header/Logo';

import { HeaderBg, HeaderWrapper } from './styles';

interface Props {
  siteTitle: string;
}

/**
 * Header component
 *
 * @param {Props} props
 */
const Header: React.FC<Props> = ({ siteTitle }) => (
  <HeaderBg>
    <HeaderWrapper>
      <Logo />
      <MainNav />
    </HeaderWrapper>
  </HeaderBg>
);

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
