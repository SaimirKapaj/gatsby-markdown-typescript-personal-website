import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';

export const Logo = styled(Link)`
  ${tw`flex items-center mr-auto text-gray-900 hover:text-gray-900`};
`;

export const Text = styled.h1`
  ${tw`text-xl font-light`};
`;

export const Image = styled.figure`
  ${tw`w-16 h-16 mr-3`};

  img {
    ${tw`rounded-full`};
  }
`;
