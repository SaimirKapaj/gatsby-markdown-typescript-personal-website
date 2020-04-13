import React from 'react';

import * as Styled from './styles';

interface Props extends Styled.StyledProps {
  children: React.ReactNode;
}

/**
 * Container component
 *
 * @param {Props} props
 */
const Container: React.FC<Props> = ({ section, children }) => (
  <Styled.Container section={section}>{children}</Styled.Container>
);

export default Container;
