import React from 'react';

import * as Styled from './styles';
import { StyledProps } from './styles';

interface Props extends StyledProps {
  text: string;
}

const TitleSection: React.FC<Props> = ({ center, text }) => (
  <Styled.TitleSection>
    <Styled.Text center={center}>{text}</Styled.Text>
    <Styled.Separator center={center} />
  </Styled.TitleSection>
);

export default TitleSection;
