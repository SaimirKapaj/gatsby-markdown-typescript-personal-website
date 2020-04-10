import styled from 'styled-components';
import tw from 'tailwind.macro';

interface Props {
  section?: boolean;
}

const Container = styled.div<Props>`
  ${tw`flex flex-wrap items-center max-w-screen-md mx-auto p-5`};
  ${({ section }) => section && tw`py-16`};
`;

export default Container;
