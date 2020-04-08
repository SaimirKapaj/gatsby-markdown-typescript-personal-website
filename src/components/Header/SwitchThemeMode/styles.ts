import styled from 'styled-components';
import tw from 'tailwind.macro';

export const SwitchThemeModeButton = styled.button`
  ${tw`flex items-center p-2 `};

  svg {
    ${tw`fill-current text-indigo-200`};
  }

  &:hover svg {
    ${tw`fill-current text-indigo-100`};
  }
`;
