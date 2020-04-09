import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Layout = styled.main`
  ${tw`flex flex-col min-h-screen`};
`;

export const MainWrapper = styled.div`
  ${tw`flex flex-col flex-1 w-full max-w-screen-sm mx-auto mt-5 p-5`};
`;
