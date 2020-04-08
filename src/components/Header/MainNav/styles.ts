import styled from 'styled-components';
import tw from 'tailwind.macro';

interface NavProps {
  open: boolean;
}

export const MainNavWrapper = styled.div`
  ${tw`flex items-center justify-between`};
`;

export const Nav = styled.nav<NavProps>`
  ${tw`fixed sm:relative flex flex-col sm:flex-row w-full sm:w-auto left-0 top-0 h-screen sm:h-auto justify-center items-center bg-indigo-100 `};
  ${({ open }) => !open && tw`hidden sm:flex`};
`;

export const NavItem = styled.span`
  ${tw`m-2`};

  a {
    ${tw`p-2 pr-3 pl-3 text-gray-900 hover:text-indigo-600 text-base font-light`};
  }

  a.active {
    ${tw`text-white bg-indigo-600 rounded-full`};
  }
`;

export const OpenNavButton = styled.button`
  ${tw`flex items-center justify-center sm:hidden w-8 p-2`};

  svg {
    ${tw`fill-current`};
  }

  &:hover svg {
    ${tw`fill-current`};
  }
`;

export const CloseNavButton = styled(OpenNavButton)`
  ${tw`absolute top-0 right-0 m-5`}
`;
