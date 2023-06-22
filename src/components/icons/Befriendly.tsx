import React from 'react'
interface Props {
  fill?: string
  width?: string
  height?: string
}
const Befriendly = (props: Props) => {
  const { fill = '#E359DB', width = '16', height = '16' } = props
  return (
    <>
      <svg width={width} height={height} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M7.83334 14.2333L6.89084 13.3533C3.54334 10.24 1.33334 8.18 1.33334 5.66667C1.33334 3.60667 2.90634 2 4.90834 2C6.03934 2 7.12484 2.54 7.83334 3.38667C8.54184 2.54 9.62734 2 10.7583 2C12.7603 2 14.3333 3.60667 14.3333 5.66667C14.3333 8.18 12.1233 10.24 8.77584 13.3533L7.83334 14.2333Z'
          fill={fill}
        />
      </svg>
    </>
  )
}

export default Befriendly
