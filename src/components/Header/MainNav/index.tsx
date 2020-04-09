import React, { useState } from 'react';
import { Link } from 'gatsby';

import { Nav, NavItem, ToogleNavButton } from './styles';

interface NavItem {
  title: string;
  slug: string;
}

const navItems: NavItem[] = [
  {
    title: 'About Me',
    slug: '/'
  },
  {
    title: 'Resume',
    slug: '/resume/'
  },
  {
    title: 'Blog',
    slug: '/blog/'
  },
  {
    title: 'Contact Me',
    slug: '/contact/'
  }
];

const MainNav: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Nav open={open}>
        {navItems.map((item, index) => (
          <NavItem key={`nav-item-${index}`}>
            <Link to={item.slug} activeClassName="active">
              {item.title}
            </Link>
          </NavItem>
        ))}
      </Nav>
      <ToogleNavButton open={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </ToogleNavButton>
    </>
  );
};

export default MainNav;
