import React from 'react';

import Icon, { IconProps } from 'components/utils/Icon';

import * as Styled from './styles';

interface Props {
  title: string;
  content: React.ReactNode;
  icon: IconProps;
}

/**
 * InfoBlock component
 *
 * @param {Props} props
 */
const InfoBlock: React.FC<Props> = ({ icon, title, content }) => (
  <Styled.InfoBlock>
    <Styled.Icon>
      <Icon icon={icon} />
    </Styled.Icon>
    <Styled.Wrapper>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Content>{content}</Styled.Content>
    </Styled.Wrapper>
  </Styled.InfoBlock>
);

export default InfoBlock;
