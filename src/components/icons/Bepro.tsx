import React from 'react'
interface Props {
  fill?: string
  width?: string
  height?: string
}
const Bepro = (props: Props) => {
  const { fill = '#950CFF', width = '16', height = '16' } = props
  return (
    <>
      <svg width={width} height={height} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M7.83331 1.33334L6.95904 3.22838L5.36255 1.86395L5.21051 3.9106L3.2339 3.22838L3.91811 5.19922L1.78945 5.35083L3.2339 6.90476L1.33331 7.81439L3.2339 8.76191L1.78945 10.2779L3.91811 10.4295L3.2339 12.4004L5.21051 11.7561L5.32454 13.8406L6.92103 12.4383L7.83331 14.3333L8.74559 12.4383L10.3801 13.8406L10.4561 11.7182L12.4327 12.4004L11.7485 10.4295L13.8772 10.3537L12.4707 8.72401L14.3333 7.81439L12.4327 6.90476L13.8392 5.35083L11.7485 5.19922L12.4327 3.22838L10.4561 3.9106L10.3421 1.78815L8.74559 3.22838L7.83331 1.33334Z'
          fill='#950CFF'
        />
      </svg>
    </>
  )
}

export default Bepro
