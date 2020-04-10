import styled from 'styled-components';
import tw from 'tailwind.macro';

interface Props {
  primary?: boolean;
}

const Button = styled.button<Props>`
  outline: none !important;
  ${tw`py-2 px-8 rounded-full border-2 border-indigo-600`};
  ${({ primary }) =>
    primary
      ? tw`bg-indigo-600 hover:bg-indigo-500 hover:border-indigo-500 text-white`
      : tw`text-indigo-600 hover:bg-indigo-600 hover:text-white`};
`;

export default Button;
