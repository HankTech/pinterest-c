import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconSvgProps } from '../../types/svgProps'

const IconHeart = ({ fill = 'red', stroke = 'white', size = 24 }: IconSvgProps) => (
  <Svg
    width={size}
    height={size}
    strokeWidth={1.5}
    fill={fill}
  >
    <Path
      d="M22 8.862a5.95 5.95 0 0 1-1.654 4.13c-2.441 2.531-4.809 5.17-7.34 7.608-.581.55-1.502.53-2.057-.045l-7.295-7.562c-2.205-2.286-2.205-5.976 0-8.261a5.58 5.58 0 0 1 8.08 0l.266.274.265-.274A5.612 5.612 0 0 1 16.305 3c1.52 0 2.973.624 4.04 1.732A5.95 5.95 0 0 1 22 8.862Z"
      stroke={stroke}
      strokeLinejoin="round"
    />
  </Svg>
)

export default IconHeart
