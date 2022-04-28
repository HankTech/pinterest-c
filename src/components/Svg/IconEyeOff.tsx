import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconSvgProps } from '../../types/svgProps'

const IconEyeOff = ({ size, color }: IconSvgProps) => (
  <Svg
    width={size || 24}
    height={size || 24}
    viewBox="0 0 25 25"
    stroke={color || 'red'}
    strokeWidth={2}
  >
    <Path d="M0 0h24v24H0z" stroke="none" />
    <Path d="m3 3 18 18M10.584 10.587a2 2 0 0 0 2.828 2.83" />
    <Path d="M9.363 5.365A9.466 9.466 0 0 1 12 5c4 0 7.333 2.333 10 7-.778 1.361-1.612 2.524-2.503 3.488m-2.14 1.861C15.726 18.449 13.942 19 12 19c-4 0-7.333-2.333-10-7 1.369-2.395 2.913-4.175 4.632-5.341" />
  </Svg>
)

export default IconEyeOff
