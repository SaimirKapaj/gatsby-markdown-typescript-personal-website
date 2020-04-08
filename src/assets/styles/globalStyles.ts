import { createGlobalStyle } from 'styled-components';
import { colors } from 'assets/styles/variables';
import tw from 'tailwind.macro';

export default createGlobalStyle`
  body {
    margin: 0;
    color: ${colors.black};
    background: ${colors.white};
  }

  a {
    ${tw`text-indigo-500 hover:text-indigo-600`};
  }
`;
