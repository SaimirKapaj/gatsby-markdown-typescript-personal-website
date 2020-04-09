import styled from 'styled-components';
import tw from 'tailwind.macro';

interface NavProps {
  open: boolean;
}

export const Nav = styled.nav<NavProps>`
  ${tw`flex flex-col sm:flex-row bg-indigo-100 sm:w-auto w-full order-last sm:order-none my-4 sm:my-0`};
  ${({ open }) => (open ? 'flex' : tw`hidden`)};
`;

export const NavItem = styled.span`
  ${tw`mr-8 mt-3 sm:mt-0`};

  a {
    ${tw`text-gray-900 hover:text-indigo-600 text-base font-light`};
  }

  a.active {
    ${tw`text-indigo-600`};
  }
`;

export const ToogleNavButton = styled.button<NavProps>`
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
