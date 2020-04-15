import React from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import Icon from 'components/utils/Icon';

import * as Styled from './styles';

interface Props extends FontAwesomeIconProps {
  title: string;
  description: React.ReactNode;
}

/**
 * InfoBlock component
 *
 * @param {Props} props
 */
const InfoBlock: React.FC<Props> = ({ icon, title, description }) => (
  <Styled.InfoBlock>
    <Styled.Icon>
      <Icon icon={icon} />
    </Styled.Icon>
    <Styled.Content>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Description>{description}</Styled.Description>
    </Styled.Content>
  </Styled.InfoBlock>
);

export default InfoBlock;
