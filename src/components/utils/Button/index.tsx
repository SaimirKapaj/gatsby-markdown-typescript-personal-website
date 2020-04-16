import React from 'react';

import * as Styled from './styles';

interface Props extends Styled.StyledProps {
  children: React.ReactNode;
}

/**
 * Button component
 *
 * @param {Props} props
 */
const Button: React.FC<Props> = ({ primary, block, children }) => (
  <Styled.Button primary={primary} block={block}>
    {children}
  </Styled.Button>
);

export default Button;
