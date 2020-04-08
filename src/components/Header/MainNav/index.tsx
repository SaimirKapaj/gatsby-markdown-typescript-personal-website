import React, { useState } from 'react';
import { Link } from 'gatsby';

import Icon from 'utils/Icon';

import { MainNavWrapper, Nav, NavItem, OpenNavButton, CloseNavButton } from './styles';

interface NavItem {
  title: string;
  slug: string;
}

const navItems: NavItem[] = [
  {
    title: 'Home',
    slug: '/'
  },
  {
    title: 'About',
    slug: '/about/'
  },
  {
    title: 'Blog',
    slug: '/blog/'
  },
  {
    title: 'Contact Us',
    slug: '/contact/'
  }
];

const MainNav: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <MainNavWrapper>
      <OpenNavButton onClick={() => setOpen(true)}>
        <Icon icon="bars" />
      </OpenNavButton>
      <Nav open={open}>
        <CloseNavButton onClick={() => setOpen(false)}>
          <Icon icon="times" />
        </CloseNavButton>
        {navItems.map((item, index) => (
          <NavItem key={`nav-item-${index}`}>
            <Link to={item.slug} activeClassName="active">
              {item.title}
            </Link>
          </NavItem>
        ))}
      </Nav>
    </MainNavWrapper>
  );
};

export default MainNav;
