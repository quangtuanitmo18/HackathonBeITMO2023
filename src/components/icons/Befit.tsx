import React from 'react'
interface Props {
  fill?: string
  width?: string
  height?: string
}
const Befit = (props: Props) => {
  const { fill = '#006EFF', width = '16', height = '16' } = props
  return (
    <>
      <svg width={width} height={height} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M4.82533 4.41046H1.33331L7.83331 14.3333L14.3333 4.41046H10.7721L7.83331 1.33333L4.82533 4.41046Z'
          fill={fill}
        />
      </svg>
    </>
  )
}

export default Befit
