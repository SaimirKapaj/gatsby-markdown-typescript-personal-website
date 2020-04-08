import styled from 'styled-components';
import tw from 'tailwind.macro';

export const FooterWrapper = styled.footer`
  ${tw`flex items-center justify-between p-5 pt-8 pb-8 border-t border-purple-500`};
  border-color: ${({ theme }) => theme.colors.border};
`;
