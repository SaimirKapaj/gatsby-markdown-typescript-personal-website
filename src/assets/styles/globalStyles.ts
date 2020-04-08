import { createGlobalStyle } from 'styled-components';
import tw from 'tailwind.macro';

export default createGlobalStyle`
  body {
    ${tw`m-0 text-gray-900 bg-gray-100`};
  }

  a {
    ${tw`text-indigo-600 hover:text-indigo-700`};
  }
`;
