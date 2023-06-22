import React from 'react'
interface Props {
  fill?: string
  width?: string
  height?: string
}
const Beeco = (props: Props) => {
  const { fill = '#6FD52E', width = '16', height = '16' } = props
  return (
    <>
      <svg width={width} height={height} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M7.83331 1.33333H1.33331V7.83349V7.91358H1.3338C1.3767 11.4665 4.2702 14.3335 7.83331 14.3335C11.4232 14.3335 14.3333 11.4233 14.3333 7.83349C14.3333 4.24364 11.4232 1.33349 7.83331 1.33349V1.33333Z'
          fill={fill}
        />
      </svg>
    </>
  )
}

export default Beeco
