import styled from 'styled-components';
import tw from 'tailwind.macro';

export const HeaderWrapper = styled.div`
  ${tw`bg-indigo-500 flex flex-wrap items-center justify-between w-full p-5`};
`;

export const Title = styled.h3`
  ${tw`text-lg sm:text-xl font-semibold text-white`};
`;
