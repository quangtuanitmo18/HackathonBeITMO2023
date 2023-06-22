import Image from 'next/image'
import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
const categories = [
  { name: 'be healthy', icon: '/be-healthy.svg' },
  { name: 'be fit', icon: '/be-fit.svg' },
  { name: 'be eco', icon: '/be-eco.svg' },
  { name: 'be friendly', icon: '/be-friendly.svg' },
  { name: 'be open', icon: '/be-open.svg' },
  { name: 'be pro', icon: '/be-pro.svg' }
]
const ranks = [
  { name: 'Университетский', link: 'university' },
  { name: 'Факультетский', link: 'faculty' },
  { name: 'Межвузовский', link: 'interuniversity' },
  { name: 'Международный', link: 'international' },
  { name: 'Всероссийский', link: 'all-Russia' },
  { name: 'Региональный', link: 'regional' },
  { name: 'Общественный', link: 'public' },
  { name: 'Городской', link: 'city' },
  { name: 'Районный', link: 'district' },
  { name: 'Прочее', link: 'other' }
]
const Filter = () => {
  return (
    <Menu as='div' className='inline-block text-left'>
      <div className='flex items-center gap-3'>
        <Menu.Button className='inline-flex justify-center w-full font-medium '>
          <Image src='/filter.svg' alt='' width={24} height={24} className='cursor-pointer'></Image>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 w-full mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='p-4 border border-solid rounded-md border-1 border-gray-gray12'>
            <div className='flex items-center justify-between'>
              <p className='text-[14px] leading-[22px] font-bold'>Фильтр мероприятий</p>

              <Menu.Item>
                {({ close }) => (
                  <div onClick={close}>
                    <Image src='close.svg' alt='' width={24} height={24} className='cursor-pointer'></Image>
                  </div>
                )}
              </Menu.Item>
            </div>
            <p className='text-[12px] leading-4 text-black mt-3'>Категория</p>
            <ul className='flex gap-2 max-w-[350px] flex-wrap mt-5 text-base-black'>
              {categories.map((categoryItem, index) => (
                <li
                  className='flex gap-1 px-2 py-1 transition-all border border-solid rounded-lg cursor-pointer border-1 border-gray-gray12 hover:bg-gray-gray12'
                  key={index}
                >
                  <Image src={categoryItem.icon} alt='' width={16} height={16}></Image>
                  <p className='text-[12px] leading-[18px]'>{categoryItem.name}</p>
                </li>
              ))}
            </ul>
            <div className='flex items-center justify-center gap-2 px-2 py-1 mt-4 transition-all border border-solid rounded-lg cursor-pointer border-1 border-gray-gray12 w-fit hover:bg-gray-gray12'>
              <Image src='bin.svg' alt='' width={16} height={16}></Image>
              <p className='text-[12px] leading-[18px]'>Сбросить выбор</p>
            </div>
            <p className='text-[12px] leading-4 text-black mt-5'>Уровень</p>

            <ul className='flex gap-2 max-w-[380px] flex-wrap mt-4 text-base-black'>
              {ranks.map((rankItem, index) => (
                <li
                  className='flex gap-1 px-2 py-1 transition-all border border-solid rounded-lg cursor-pointer border-1 border-gray-gray12 hover:bg-gray-gray12'
                  key={index}
                >
                  <p className='text-[12px] leading-[18px]'>{rankItem.name}</p>
                </li>
              ))}
            </ul>
            <div className='flex items-center justify-center gap-2 px-2 py-1 mt-3 border border-solid rounded-lg cursor-pointer border-1 border-gray-gray12 w-fit hover:bg-gray-gray12 '>
              <Image src='bin.svg' alt='' width={16} height={16}></Image>
              <p className='text-[12px] leading-[18px] hover:border-gray-gray40 transition-all'>Сбросить выбор</p>
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Filter
