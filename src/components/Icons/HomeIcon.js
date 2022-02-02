import * as React from "react"

const HomeIcon = (props) => (
  <svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#a)"
      stroke="#97BFC9"
      strokeWidth={3}
      strokeMiterlimit={10}
    >
      <path d="M16.5 23.801a5.473 5.473 0 1 0 0-10.945 5.473 5.473 0 0 0 0 10.945Z" />
      <path d="M31.625 24.585a6.27 6.27 0 0 1-6.256 6.27H7.63a6.27 6.27 0 0 1-6.256-6.27V17.27a6.311 6.311 0 0 1 1.829-4.428l8.869-8.854a6.256 6.256 0 0 1 8.854 0l8.87 8.854a6.311 6.311 0 0 1 1.828 4.428v7.315Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h33v33H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default HomeIcon