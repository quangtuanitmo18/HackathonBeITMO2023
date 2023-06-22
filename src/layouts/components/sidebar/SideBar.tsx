'use client'
import path from '@/constants/path'
import Image from 'next/image'
import Link from 'next/link'
import React, { useCallback, useMemo } from 'react'
import { useState, useEffect } from 'react'
import { Disclosure } from '@headlessui/react'

const SideBar = () => {
  const linkSideBar = [
    { title: 'Главная', link: '/', icon: '/home.svg' },
    { title: 'Расписание', link: '/', icon: '/schedule.svg' },
    { title: 'Учебный план', link: '/', icon: '/adviser.svg' },
    {
      title: 'Запись по выбору',
      link: '/',
      // children: [
      //   { title: 'Дашборд', link: '/home' },
      //   { title: 'Ментальная помощь', link: '/home' }
      // ],
      icon: '/menu-file.svg'
    },
    {
      title: 'Спорт',
      link: '/',
      // children: [
      //   { title: 'Дашборд', link: '/home' },
      //   { title: 'Ментальная помощь', link: '/home' }
      // ]
      icon: '/kronbar.svg'
    },
    {
      title: 'Состояние',
      link: path.state + '?id=1',
      children: [
        { title: 'Дашборд', link: path.state + '?id=1' },
        { title: 'Ментальная помощь', link: path.metalHelp + '?id=1' }
      ],
      icon: '/sticker.svg'
    },
    { title: 'Финансы', link: '/', icon: '/wallet.svg' },
    { title: 'Персоналии', link: '/', icon: '/users.svg' },
    { title: 'Зачётка', link: '/', icon: '/notebook.svg' },
    { title: 'Заявки', link: '/', icon: '/menu-note.svg' },
    { title: 'Сервисы', link: '/', icon: '/services.svg' }
  ]

  const [toggle, setToggle] = useState(false)
  const [isHidden, setIsHidden] = useState(true)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 1024) {
        setToggle(false)
      }
    }
    window.addEventListener('resize', handleResize)
    const sectionRight = document.getElementById('id-section-right')
    if (toggle) {
      sectionRight?.classList.add('resize-toggle-menu')
    } else {
      sectionRight?.classList.remove('resize-toggle-menu')
    }

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [toggle])
  return (
    <>
      <button
        onClick={() => setIsHidden((prev) => !prev)}
        type='button'
        className='fixed z-30 p-1 mt-6 ml-4 rounded-sm lg:hidden bg-gray-gray12'
      >
        {/* <span className='sr-only'>Open sidebar</span> */}
        <svg
          className='w-6 h-6'
          aria-hidden='true'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            clipRule='evenodd'
            fillRule='evenodd'
            d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
          ></path>
        </svg>
      </button>
      <div
        onClick={() => setIsHidden((prev) => !prev)}
        className={`${!isHidden && 'lg:hidden fixed inset-0 bg-gray-500 bg-opacity-70 opacity-100 z-30'}`}
      ></div>
      <aside
        id='default-sidebar'
        className={`w-[264px] ${toggle ? 'w-[4.8rem]' : ''}  z-40  h-screen ${
          isHidden && '-translate-x-full'
        } lg:translate-x-0 border-solid border-r-[1px] border-r-gray-100 text-gray-gray80 fixed lg:relative`}
        aria-label='Sidebar'
      >
        <div className='h-full py-5 bg-white'>
          <div
            className={`${toggle ? 'w-[4.8rem]' : ''} flex items-center gap-1 justify-center cursor-pointer px-4 w-64`}
          >
            {/* <Image src={`/my.svg`} className={`${toggle ? 'hidden' : ''}`} alt='' width={80} height={30}></Image>
            <Image src={`/short_logo.svg`} alt='' width={160} height={60}></Image>
            <Image src={`/itmo.svg`} className={`${toggle ? 'hidden' : ''}`} alt='' width={160} height={60}></Image> */}
            <Image src={`${toggle ? '/short_logo.svg' : '/logo.svg'}`} alt='' width={160} height={60}></Image>
          </div>
          <div
            className='hidden lg:block p-[3px] border border-solid rounded-full border-1 border-gray-100 w-fit absolute right-0 translate-x-1/2 bg-white hover:bg-gray-gray4 cursor-pointer'
            onClick={() => {
              setToggle(!toggle)
            }}
          >
            <Image
              src='/arrow-left.svg'
              className={`${toggle ? 'rotate-180' : ''}`}
              alt=''
              width={25}
              height={25}
            ></Image>
          </div>
          <ul className='px-3 mt-6 space-y-2 font-medium'>
            {linkSideBar.map((itemLink, index) => (
              <li key={index}>
                {itemLink.children ? (
                  <Disclosure as='div'>
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={`${toggle ? 'w-[3.6rem]' : 'w-[14rem]'} p-2 rounded-md hover:bg-gray-gray4`}
                        >
                          <div className='flex items-center text-gray-900 rounded-lg '>
                            <Image src={itemLink.icon} alt='' width={25} height={25}></Image>

                            <span
                              className={`${toggle ? 'hidden' : ''} ${
                                open ? 'text-blue-700' : 'text-gray-gray80'
                              } ml-3 text-base `}
                            >
                              {itemLink.title}
                            </span>
                            <Image
                              src='/arrow-left.svg'
                              className={`${toggle ? 'hidden' : ''} ${open ? 'hidden' : ''}  ml-16`}
                              alt=''
                              width={25}
                              height={25}
                            ></Image>
                            <Image
                              src='/arrow-active.svg'
                              className={`${toggle ? 'hidden' : ''} ${open ? '' : 'hidden'}  ml-16`}
                              alt=''
                              width={14}
                              height={14}
                            ></Image>
                          </div>
                        </Disclosure.Button>
                        <Disclosure.Panel>
                          <div className='flex'>
                            <div className='border-l-2 border-solid border-gray-gray4 ml-5 h-[88px]'></div>
                            <div className='flex-row '>
                              <div
                                onClick={() => {
                                  setIsActive(!isActive)
                                }}
                                className='p-3 ml-2 rounded-lg h-1/2 text-gray-gray80 hover:bg-gray-gray4'
                              >
                                <div
                                  className={`${isActive ? '' : 'hidden'} absolute -ml-[25px] mt-1 w-2 h-2 bg-blue-700`}
                                ></div>
                                <Link
                                  className={`${toggle ? 'hidden' : ''} ${isActive ? 'text-blue-700' : ''} `}
                                  href={itemLink.link}
                                >
                                  Дашборд
                                </Link>
                              </div>
                              <div className='p-3 ml-2 rounded-lg h-1/2 text-gray-gray80 hover:bg-gray-gray4'>
                                <Link className={`${toggle ? 'hidden' : ''} `} href={itemLink.children[1].link}>
                                  Ментальная помощь
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ) : (
                  <div className={`${toggle ? 'w-[3.6rem]' : 'w-[14rem]'} p-2 rounded-md hover:bg-gray-gray4`}>
                    <Link href={itemLink.link} className='flex items-center text-gray-900 rounded-lg '>
                      <Image src={itemLink.icon} alt='' width={25} height={25}></Image>

                      <span className={`${toggle ? 'hidden' : ''} ml-3 text-base text-gray-gray80`}>
                        {itemLink.title}
                      </span>
                    </Link>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  )
}

export default SideBar
