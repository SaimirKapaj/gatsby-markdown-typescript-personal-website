import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode, faDrawPolygon, faEdit, faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

/**
 * add any additional icon to the library
 */
library.add(fab, faLaptopCode, faDrawPolygon, faEdit, faEdit, faBullhorn);

export type IconProps = FontAwesomeIconProps['icon'];

/**
 * Icon component
 *
 * @param {FontAwesomeIconProps} props
 */
const Icon: React.FC<FontAwesomeIconProps> = ({ ...props }) => <FontAwesomeIcon {...props} />;

export default Icon;
