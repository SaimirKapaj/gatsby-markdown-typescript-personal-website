import styled from 'styled-components';
import tw from 'tailwind.macro';

export const InfoBlock = styled.div`
  ${tw`flex flex-col my-4 mx-3 p-4 bg-white rounded-lg border border-indigo-100`};
  box-shadow: 5px 5px 0 #ebf4ff;
`;

export const Icon = styled.span`
  ${tw`flex items-center justify-center w-10 h-10 text-indigo-500 border border-teal-400 rounded-full mb-2`};
`;

export const Content = styled.div``;

export const Title = styled.h3`
  ${tw`text-md mt-1 font-semibold`};
`;

export const Description = styled.p`
  ${tw`mt-1`};
`;
