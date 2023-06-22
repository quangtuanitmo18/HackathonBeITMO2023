import React from 'react'
interface Props {
  fill?: string
  width?: string
  height?: string
}
const Behealthy = (props: Props) => {
  const { fill = '#FF3A32', width = '16', height = '16' } = props
  return (
    <>
      <svg width={width} height={height} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M9.62084 1.33333H6.04584V3.51789L4.51125 1.9833L1.98334 4.51121L3.51797 6.04583H1.33334V9.62083H3.53822L1.98333 11.1757L4.51124 13.7036L6.04584 12.169V14.3333H9.62084V12.1487L11.1757 13.7036L13.7036 11.1757L12.1488 9.62083H14.3333V6.04583H12.169L13.7036 4.51124L11.1757 1.98333L9.62084 3.53821V1.33333Z'
          fill={fill}
        />
      </svg>
    </>
  )
}

export default Behealthy
