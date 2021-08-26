import styled from 'styled-components';
import tw from 'twin.macro';
import { Container } from 'components/ui/Container/styles';

export const Header = styled.header`
  ${tw`bg-gray-100 border-b border-gray-200 -mb-px`};
`;

export const Wrapper = styled(Container)`
  ${tw`items-center`};
`;
