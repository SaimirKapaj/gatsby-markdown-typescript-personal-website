import styled from 'styled-components';
import tw from 'tailwind.macro';

interface Props {
  primary?: boolean;
}

/**
 * Button component
 *
 * @param {Props} props
 */
const Button = styled.button<Props>`
  outline: none !important;
  ${tw`py-2 px-8 rounded-full border border-teal-300 text-indigo-900`};
  ${({ primary }) =>
    primary
      ? tw`bg-teal-300 hover:bg-teal-200 hover:border-teal-200`
      : tw`text-indigo-600 hover:text-indigo-900 hover:bg-teal-300`};
`;

export default Button;
