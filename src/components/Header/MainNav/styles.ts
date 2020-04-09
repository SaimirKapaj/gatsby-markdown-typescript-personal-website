import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';

interface MainNavProps {
  open: boolean;
}

export const MainNav = styled.nav<MainNavProps>`
  ${tw`flex flex-col sm:flex-row bg-indigo-100 sm:w-auto w-full order-last sm:order-none my-4 sm:my-0`};
  ${({ open }) => (open ? 'flex' : tw`hidden`)};
`;

export const MainNavItem = styled(Link)`
  ${tw`mr-8 mt-3 sm:mt-0 text-gray-900 hover:text-indigo-600 text-base font-light`};

  &.active {
    ${tw`text-indigo-600`};
  }
`;

export const ToogleMainNav = styled.button<MainNavProps>`
  ${tw`flex flex-col items-center justify-center cursor-pointer w-6 h-5`};
  outline: none !important;

  span {
    ${tw`bg-gray-900 inline-block w-6 h-px`};
    transition: 0.2s;

    &:first-child {
      ${({ open }) => (open ? tw`-mb-px` : tw`mb-2 `)};
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'none')};
    }

    &:last-child {
      ${({ open }) => (open ? tw`-mt-px` : tw`mt-2`)};
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'none')};
    }

    &:nth-child(2) {
      ${({ open }) => (open ? tw`opacity-0` : tw`opacity-1`)};
      transform: ${({ open }) => (open ? 'translate(20px)' : 'none')};
    }
  }
`;
