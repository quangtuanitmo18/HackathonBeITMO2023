import React from 'react'
interface Props {
  fill?: string
  width?: string
  height?: string
}
const Logout = (props: Props) => {
  const { fill = '#5C5C5C', width = '24', height = '24' } = props
  return (
    <>
      <svg width={width} height={height} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M21.75 11C21.75 10.5858 21.4142 10.25 21 10.25H16.8107L17.5303 9.53034C17.8232 9.23745 17.8232 8.76257 17.5303 8.46968C17.2374 8.17679 16.7626 8.17679 16.4697 8.46968L14.4697 10.4697C14.1768 10.7626 14.1768 11.2374 14.4697 11.5303L16.4697 13.5303C16.7626 13.8232 17.2374 13.8232 17.5303 13.5303C17.8232 13.2374 17.8232 12.7626 17.5303 12.4697L16.8107 11.75H21C21.4142 11.75 21.75 11.4142 21.75 11Z'
          fill='#5C5C5C'
        />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M11.75 7.50301C11.75 6.55476 11.262 5.67299 10.457 5.17071L8.1839 3.75001H15C15.6908 3.75001 16.25 4.30922 16.25 5.00001V6.00001C16.25 6.41422 16.5858 6.75001 17 6.75001C17.4142 6.75001 17.75 6.41422 17.75 6.00001V5.00001C17.75 3.4808 16.5192 2.25001 15 2.25001H5C3.53758 2.20747 2.25 3.36122 2.25 5.00301V16.497C2.25 17.4451 2.73826 18.327 3.54299 18.8293L7.5425 21.329C9.14985 22.3341 11.1765 21.4426 11.6486 19.75H15C16.5192 19.75 17.75 18.5192 17.75 17V16C17.75 15.5858 17.4142 15.25 17 15.25C16.5858 15.25 16.25 15.5858 16.25 16V17C16.25 17.6908 15.6908 18.25 15 18.25H11.75V7.50301ZM5.6625 3.94301C4.82962 3.42295 3.75 4.02158 3.75 5.00301V16.497C3.75 16.9288 3.97204 17.329 4.33701 17.5567L8.3375 20.057C9.16994 20.5776 10.25 19.9789 10.25 18.998V7.50301C10.25 7.07126 10.028 6.67103 9.66299 6.44331L5.6625 3.94301Z'
          fill={fill}
        />
      </svg>
    </>
  )
}

export default Logout
