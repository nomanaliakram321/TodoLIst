import React from 'react';
import IcoMoon, {IconProps} from 'react-icomoon';
import {Svg, Path} from 'react-native-svg';
import iconSet from '../../assets/iconmoon/selection.json';

const Icon = (props: IconProps) => (
  <IcoMoon
    native
    iconSet={iconSet}
    SvgComponent={Svg}
    PathComponent={Path}
    {...props}
  />
);

export default Icon;
