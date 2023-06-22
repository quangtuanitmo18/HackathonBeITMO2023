import Image from 'next/image'
import React, { Fragment, useMemo, useState } from 'react'
import Filter from '../components/filter'
import { Dialog, Transition } from '@headlessui/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Befriendly from '@/components/icons/Befriendly'
import { Befit, Behealthy, Beopen } from '@/components/icons'
import useQueryConfig from '@/hooks/useQueryConfig'
import { useQuery } from '@tanstack/react-query'
import { eventsApi } from '@/apis/events/events.api'
import {
  HoverColorBGBeWithCategoryEvent,
  HoverColorTextBeWithCategoryEvent,
  getColorBGBeWithCategoryEvent,
  getColorTextBeWithCategoryEvent,
  getTime
} from '@/utils/app'
import CheckIcon from '../components/checkIcon'

const Events = () => {
  const { queryConfigQuery } = useQueryConfig()
  const [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  // const { data: eventFutureNotregister, isLoading: isLoadingEventFutureNotregister } = useQuery({
  //   queryKey: ['eventFutureNotregister', queryConfig],
  //   queryFn: () => eventsApi.getEventsFutureNotRegister({ id: queryConfig.id as string }),
  //   keepPreviousData: true,
  //   staleTime: 3 * 60 * 1000
  // })
  const { data: filterEvents, isLoading: isLoadingfilterEvents } = useQuery({
    queryKey: ['filterEvents', queryConfigQuery],
    queryFn: () =>
      eventsApi.getFilterEvents({
        id: queryConfigQuery.id as string,
        category: queryConfigQuery.category as string[] | undefined,
        rank: queryConfigQuery.rank as string[] | undefined
      }),
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000,
    enabled: queryConfigQuery.id !== ''
  })
  const filterEventsFutureNotRegister = useMemo(
    () => filterEvents?.data.data.eventsNotRegisteredResult,
    [filterEvents?.data.data.eventsNotRegisteredResult]
  )

  // console.log(filterEventsFutureNotRegister)

  return (
    <div
      className='w-full 2xl:w-1/2  p-4  ml-auto border border-solid rounded-lg border-1 border-gray-gray12 text-base-black  overflow-y-auto max-h-[512px] h-full overflow-x-auto'
      id='id-events'
    >
      <p className='text-base font-bold'>Предстоящие мероприятия</p>
      <div className='relative flex items-center justify-between'>
        <p className='text-[14px] leading-[22px] mt-5'>Название мероприятия</p>
        {/* <div className='flex items-center gap-3'>
          <Image src='/search.svg' alt='' width={16} height={16} className='cursor-pointer'></Image>
           
        </div> */}
        <Filter></Filter>
      </div>
      <ul className='flex flex-col gap-3 mt-4 w-[750px] md:w-auto'>
        {filterEventsFutureNotRegister &&
          filterEventsFutureNotRegister.map((item, index) => (
            <li onClick={openModal} className='flex items-center justify-between group' key={index}>
              <div className='flex items-center gap-1'>
                {item.categoryEvent ? (
                  <CheckIcon itemEvent={item}></CheckIcon>
                ) : (
                  <Image src='./search.svg' alt='' width={14} height={14}></Image>
                )}

                <div
                  className={`p-3 rounded-md text-[12px] leading-[18px] ${getColorBGBeWithCategoryEvent({
                    itemEvent: item,
                    type: 'light'
                  })} ${getColorTextBeWithCategoryEvent({
                    itemEvent: item
                  })} 
                  ${HoverColorTextBeWithCategoryEvent({
                    itemEvent: item,
                    type: 'light'
                  })} 
                  ${HoverColorBGBeWithCategoryEvent({
                    itemEvent: item
                  })} 
                  group-hover:cursor-pointer max-w-[400px] truncate`}
                >
                  {item.name}
                </div>
              </div>
              <div className='flex gap-2'>
                <div
                  className={`p-3 rounded-md text-[12px] leading-[18px group-hover:cursor-pointer ${getColorBGBeWithCategoryEvent(
                    {
                      itemEvent: item,
                      type: 'light'
                    }
                  )} ${getColorTextBeWithCategoryEvent({
                    itemEvent: item
                  })} 
                  ${HoverColorTextBeWithCategoryEvent({
                    itemEvent: item,
                    type: 'light'
                  })} 
                  ${HoverColorBGBeWithCategoryEvent({
                    itemEvent: item
                  })} max-w-[150px] truncate`}
                >
                  {item.type}
                </div>
                <div
                  className={`p-3 rounded-md  text-[12px] leading-[18px] group-hover:cursor-pointer ${getColorBGBeWithCategoryEvent(
                    {
                      itemEvent: item,
                      type: 'light'
                    }
                  )} ${getColorTextBeWithCategoryEvent({
                    itemEvent: item
                  })} 
                  ${HoverColorTextBeWithCategoryEvent({
                    itemEvent: item,
                    type: 'light'
                  })} 
                  ${HoverColorBGBeWithCategoryEvent({
                    itemEvent: item
                  })} `}
                >
                  {getTime({ dateString: item.start_time, withYear: false })}
                </div>
              </div>
            </li>
          ))}

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as='div' className='relative z-50' onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-black bg-opacity-50' />
            </Transition.Child>

            <div className='fixed inset-0 overflow-y-auto'>
              <div className='flex items-center justify-center min-h-full text-center'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-out duration-300'
                  enterFrom='opacity-0 scale-95'
                  enterTo='opacity-100 scale-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100 scale-100'
                  leaveTo='opacity-0 scale-95'
                >
                  <Dialog.Panel className='max-w-5xl overflow-hidden text-left align-middle transition-all transform bg-white rounded-lg shadow-xl'>
                    <div className='grid md:grid-cols-5'>
                      <div className='md:col-span-2'>
                        {/* <Swiper
                          modules={[Pagination, A11y, Autoplay, Navigation]}
                          slidesPerView={1}
                          autoplay={{
                            delay: 4000,
                            disableOnInteraction: false
                          }}
                          pagination={{ clickable: true }}
                          navigation
                          loop={true}
                          className='!z-0'
                        >
                          <SwiperSlide>
                            <div className='!relative !w-120 !h-120'>
                              <Image
                                src={'/flag-russia.png'}
                                alt=''
                                className='object-cover w-full h-full'
                                fill
                                sizes='100%'
                                priority={true}
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className='!relative !w-120 !h-120'>
                              <Image
                                src={'/event1.png'}
                                alt=''
                                className='object-cover w-full h-full'
                                fill
                                sizes='100%'
                              />
                            </div>
                          </SwiperSlide>
                        </Swiper> */}
                        <Image
                          className='!relative !w-[413px] !h-full'
                          src={'/event1.png'}
                          alt='event'
                          sizes='100%'
                          fill
                        />
                      </div>
                      <div className='p-6 md:col-span-3'>
                        <div className='flex items-center justify-between'>
                          <h2 className='items-end text-2xl font-semibold text-base-black font-secondary'>
                            Выезд ПИиКТ в УСОЦ «Ягодное»
                          </h2>
                          <div className='justify-end'>
                            <button type='button' className='inline-flex justify-end outline-none' onClick={closeModal}>
                              <Image src='/close.svg' alt='' width={25} height={25}></Image>
                            </button>
                          </div>
                        </div>
                        <div className='flex gap-4 mt-4'>
                          <div className='flex flex-col items-center justify-center gap-1'>
                            <div className='flex items-center justify-center w-12 h-12 rounded-lg cursor-pointer bg-be-healthy_light'>
                              <Behealthy width='24' height='24'></Behealthy>
                            </div>
                            <p className='text-[12px]  leading-[18px] text-black'>be healthy</p>
                          </div>
                          <div className='flex flex-col items-center justify-center gap-1'>
                            <div className='flex items-center justify-center w-12 h-12 rounded-lg cursor-pointer bg-be-open_light'>
                              <Beopen width='24' height='24'></Beopen>
                            </div>
                            <p className='text-[12px]  leading-[18px] text-black'>be open</p>
                          </div>
                          <div className='flex flex-col items-center justify-center gap-1'>
                            <div className='flex items-center justify-center w-12 h-12 rounded-lg cursor-pointer bg-be-friendly_light'>
                              <Befriendly width='24' height='24'></Befriendly>
                            </div>
                            <p className='text-[12px]  leading-[18px] text-black'>be friendly</p>
                          </div>
                          <div className='flex flex-col items-center justify-center gap-1'>
                            <div className='flex items-center justify-center w-12 h-12 rounded-lg cursor-pointer bg-be-fit_light'>
                              <Befit width='24' height='24'></Befit>
                            </div>
                            <p className='text-[12px]  leading-[18px] text-black'>be fit</p>
                          </div>
                        </div>

                        <h3 className='font-semibold mt-[29px] '>
                          Перезагрузка в Ягодном. Отдохни с пользой для души и тела.
                        </h3>
                        <p className='mt-3 text-[14px]  leading-[22px]'>
                          Вас ждет программа психологической разгрузки, направленная на улучшение ментального здоровья,
                          спортивные и оздоравливающие мероприятия, общение с коллегами в неформальной обстановке.
                        </p>
                        <p className='mt-3 text-[14px]  leading-[22px]'>
                          Темы и набор активностей формируются по вашим индивидуальным запросам. Выберите готовые
                          решения или предложите свои варианты.
                        </p>
                        <h3 className='font-semibold mt-[29px] '>Выезд в Ягодное по программе «Перезагрузка» это:</h3>
                        <ul className='ml-4 text-black list-disc'>
                          <li className='mt-3 text-[14px]  leading-[22px]'>
                            1,5 дня на загородной базе в сосновом лесу у Берестового озера.
                          </li>
                          <li className='mt-3 text-[14px]  leading-[22px]'>
                            1,5 дня на загородной базе в сосновом лесу у Берестового озера.
                          </li>
                          <li className='mt-3 text-[14px]  leading-[22px]'>
                            1,5 дня на загородной базе в сосновом лесу у Берестового озера.
                          </li>
                        </ul>
                        <div className='flex gap-2 mt-[30px] items-center'>
                          <p className='text-[14px] leading-[22px]'>Полезные ссылки:</p>
                          <Image className='cursor-pointer' src='./vkontact.svg' alt='' height={32} width={32}></Image>
                          <Image className='cursor-pointer' src='./telegram.svg' alt='' height={32} width={32}></Image>
                        </div>
                        <div className='flex justify-between gap-4 mt-[58px]'>
                          <div className='flex items-center gap-2'>
                            <p className=' leading-[22px] text-[14px]'>Свободно мест:</p>
                            <div className=' px-3 py-[1px] rounded-2xl bg-[#A6FD9F] text-secondary-green'>
                              <span className='text-[12px] leading-[18px]'>50</span>
                            </div>
                          </div>

                          <button className='px-4 py-2 font-semibold leading-5 text-white  text-[14px] bg-primary-blue rounded-md'>
                            Записаться на мероприятие
                          </button>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </ul>
    </div>
  )
}

export default Events
