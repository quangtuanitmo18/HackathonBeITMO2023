import Image from 'next/image'
import React from 'react'
import { Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Befriendly } from '@/components/icons'
import { EventNotHappendedData } from '@/types/events/eventHappendAndNotHappend.type'
import { getColorBGBeWithCategoryEvent, getTime } from '@/utils/app'
import classNames from 'classnames'
interface Props {
  eventsNotHappended: EventNotHappendedData[]
}
const MyEvents = (props: Props) => {
  const { eventsNotHappended } = props
  // console.log(eventsNotHappended)
  return (
    <div className='w-full  p-5 border border-solid rounded-md border-1 border-gray-gray12 h-[300px]'>
      <p className='font-bold'>Мои мероприятия</p>
      <ul className='flex gap-3 mt-3'>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={1}
          mousewheel={true}
          modules={[Mousewheel]}
          className='!ml-0 !mr-0'
        >
          {eventsNotHappended &&
            eventsNotHappended.map((item, index) => (
              <SwiperSlide
                className='relative p-2 shrink-0 cursor-pointer flex items-center justify-center !w-auto !h-auto pl-4 pb-4'
                key={index}
              >
                <li className='flex flex-col gap-4 p-4 border border-solid rounded-md shadow-sm pr-14 border-1 border-gray-gray12 max-w-[300px]'>
                  <div
                    className={classNames(`flex gap-1 px-[6px] py-1 text-white rounded-md w-fit ${getColorBGBeWithCategoryEvent(
                      { itemEvent: item }
                    )}
                    `)}
                  >
                    <Befriendly fill='#FFFFFF'></Befriendly>
                    <p className='text-[10px] leading-4 text-white'>{item.type}</p>
                  </div>
                  <p className='text-[14px] text-base-black leading-[22px] truncate'>{item.name}</p>
                  <div className='flex flex-col gap-2 text-gray-gray60'>
                    <div className='flex gap-2 text-gray-gray40 text-[12px] items-center'>
                      <Image src='/location.svg' alt='' width={16} height={16}></Image>
                      <p className='text-[12px] leading-[18px]'>Крон</p>
                    </div>
                    <div className='flex items-center gap-2 text-gray-gray40'>
                      <Image src='/calendar.svg' alt='' width={16} height={16}></Image>
                      <div className='flex gap-2'>
                        <p className='text-[12px] leading-[18px]'>{getTime({ dateString: item.start_time })}</p>
                        <p>-</p>
                        <p className='text-[12px] leading-[18px]'>{getTime({ dateString: item.end_time })}</p>
                      </div>
                    </div>
                    <div className='flex items-center gap-2 text-gray-gray40'>
                      <Image src='/clock-circle.svg' alt='' width={16} height={16}></Image>
                      <p className='text-[12px] leading-[18px]'>09:00</p>
                    </div>
                  </div>
                  <button className='flex gap-[9px] p-[5px] border border-solid rounded-md border-1 border-primary-pink text-primary-pink'>
                    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M14.5 7.33312C14.5 7.05697 14.2761 6.83312 14 6.83312H11.2071L11.6869 6.35334C11.8821 6.15807 11.8821 5.84149 11.6869 5.64623C11.4916 5.45097 11.175 5.45097 10.9798 5.64623L9.64645 6.97956C9.45118 7.17482 9.45118 7.49141 9.64645 7.68667L10.9798 9.02C11.175 9.21526 11.4916 9.21526 11.6869 9.02C11.8821 8.82474 11.8821 8.50816 11.6869 8.3129L11.2071 7.83312H14C14.2761 7.83312 14.5 7.60926 14.5 7.33312Z'
                        fill='#EE215B'
                      />
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M7.83333 5.00178C7.83333 4.36961 7.50802 3.78177 6.97134 3.44691L5.45593 2.49978H10C10.4605 2.49978 10.8333 2.87259 10.8333 3.33312V3.99978C10.8333 4.27592 11.0572 4.49978 11.3333 4.49978C11.6095 4.49978 11.8333 4.27592 11.8333 3.99978V3.33312C11.8333 2.32031 11.0128 1.49978 10 1.49978H3.33333C2.35839 1.47142 1.5 2.24059 1.5 3.33512V10.9978C1.5 11.6298 1.8255 12.2178 2.36199 12.5527L5.02833 14.2191C6.0999 14.8891 7.45101 14.2949 7.76571 13.1664H10C11.0128 13.1664 11.8333 12.3459 11.8333 11.3331V10.6664C11.8333 10.3903 11.6095 10.1664 11.3333 10.1664C11.0572 10.1664 10.8333 10.3903 10.8333 10.6664V11.3331C10.8333 11.7936 10.4605 12.1664 10 12.1664H7.83333V5.00178ZM3.775 2.62845C3.21975 2.28174 2.5 2.68083 2.5 3.33512V10.9978C2.5 11.2856 2.64802 11.5524 2.89134 11.7042L5.55833 13.3711C6.11329 13.7182 6.83333 13.319 6.83333 12.6651V5.00178C6.83333 4.71395 6.68531 4.44713 6.44199 4.29532L3.775 2.62845Z'
                        fill='#EE215B'
                      />
                    </svg>

                    <span className='text-[12px] leading-[18px]'>Отписаться от мероприятия</span>
                  </button>
                </li>
              </SwiperSlide>
            ))}
        </Swiper>
      </ul>
    </div>
  )
}

export default MyEvents
