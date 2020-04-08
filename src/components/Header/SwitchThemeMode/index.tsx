import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uiSelector, toggleThemeMode } from 'state/ui';

import Icon from 'utils/Icon';

import { SwitchThemeModeButton } from './styles';

const SwitchThemeMode: React.FC = () => {
  const { themeMode } = useSelector(uiSelector);
  const dispatch = useDispatch();

  return (
    <SwitchThemeModeButton onClick={() => dispatch(toggleThemeMode())}>
      <Icon icon={themeMode === 'light' ? 'moon' : 'sun'} />
    </SwitchThemeModeButton>
  );
};

export default SwitchThemeMode;
