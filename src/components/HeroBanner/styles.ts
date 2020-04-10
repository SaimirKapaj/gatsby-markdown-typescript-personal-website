import styled from 'styled-components';
import tw from 'tailwind.macro';

export const HeroBanner = styled.section`
  ${tw`bg-indigo-100`};
`;

export const Wrapper = styled.div`
  ${tw`flex flex-wrap items-center max-w-screen-md mx-auto p-5 pt-8 pb-16`};
`;

export const Title = styled.h1`
  ${tw`text-5xl text-indigo-600 font-semibold p-0`};
`;

export const Description = styled.p`
  ${tw`mt-3 mb-8`};
`;
