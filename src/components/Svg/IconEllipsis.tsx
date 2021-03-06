import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconSvgProps } from '../../types/svgProps'

const IconEllipsis = ({ color = 'red', size }: IconSvgProps) => (
  <Svg
    width={size || 24}
    height={size || 24}
    fill={color}
  >
    <Path
      fillRule="evenodd"
      d="M7 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm14 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-7 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
  </Svg>
)

export default IconEllipsis
