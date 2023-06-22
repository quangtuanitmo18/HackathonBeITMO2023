import React from 'react'
interface Props {
  fill?: string
  width?: string
  height?: string
}
const Beopen = (props: Props) => {
  const { fill = '#FFB400', width = '16', height = '16' } = props
  return (
    <>
      <svg width={width} height={height} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M7.79617 1.33334L1.33331 5.64312V14.3333H14.3333V5.64312L7.79617 1.33334Z' fill={fill} />
      </svg>
    </>
  )
}

export default Beopen
