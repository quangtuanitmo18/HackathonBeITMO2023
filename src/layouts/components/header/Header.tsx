'use client'
import { Listbox, Transition } from '@headlessui/react'
import { Query, useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import React, { Fragment, useEffect, useMemo, useState } from 'react'
import { studentsApi } from '@/apis/students/students.api'
import { StudentsData } from '@/types/students/students.type'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import path from '@/constants/path'

const languages = [
  { name: 'русский', icon: '/flag-russia.png' },
  { name: 'english', icon: '/flag-england.svg' }
]
interface Props {
  heading?: string
}

const Header = (props: Props) => {
  const { heading } = props
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
  const [isHidden, setIsHidden] = useState(true)
  const [selected, setSelected] = useState<StudentsData | null>(null)
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const idStudents = searchParams.get('id')
  const router = useRouter()
  // console.log(pathname)

  const { data: students } = useQuery({
    queryKey: ['students'],
    queryFn: studentsApi.getStudents
  })
  const studentsData = useMemo(() => students?.data.data, [students?.data.data])

  useEffect(() => {
    if (studentsData && studentsData?.length > 0) {
      setSelected(() => studentsData[Number(idStudents) - 1])
    }
  }, [idStudents, studentsData])
  // get list students

  return (
    <header className='flex items-center'>
      <h1 className='ml-8 text-xl font-bold lg:text-3xl justify-self-center'>{heading}</h1>
      <div className='flex items-center gap-4 ml-auto'>
        <div className='hidden p-3 rounded cursor-pointer lg:block hover:bg-gray-gray12'>
          <Image src='/search.svg' alt='' width={16} height={16}></Image>
        </div>
        <div className='hidden lg:block h-4 w-[1px] bg-gray-gray40'></div>

        <Listbox value={selected} onChange={setSelected}>
          <div className='relative mt-1'>
            <Listbox.Button className='relative  py-2 pl-3 pr-3 text-left bg-white focus:outline-none w-fit md:w-[212px]'>
              <div className='flex items-center gap-2 cursor-pointer'>
                <div className='border-2 border-solid rounded-full border-primary-blue '>
                  <Image
                    src='https://source.unsplash.com/random'
                    alt=''
                    fill
                    className='object-cover rounded-full !relative !w-[35px] !h-[35px] p-[1px]'
                  ></Image>
                </div>

                <div className='flex-col hidden gap-2 md:flex'>
                  <p className='text-black'>{selected?.attributes.full_name}</p>
                  <span className='text-gray-gray40'>{selected?.attributes.isu}</span>
                </div>

                <svg
                  className='hidden ml-auto md:block '
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M18.5303 8.46967C18.8232 8.76256 18.8232 9.23744 18.5303 9.53033L12.5303 15.5303C12.2374 15.8232 11.7626 15.8232 11.4697 15.5303L5.46967 9.53033C5.17678 9.23744 5.17678 8.76256 5.46967 8.46967C5.76256 8.17678 6.23744 8.17678 6.53033 8.46967L12 13.9393L17.4697 8.46967C17.7626 8.17678 18.2374 8.17678 18.5303 8.46967Z'
                    fill='#5C5C5C'
                  />
                </svg>
              </div>
            </Listbox.Button>

            <Transition
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options
                className='absolute z-30 flex flex-col w-[212px] -translate-x-[80%] md:w-full md:-translate-x-0 gap-2 py-3 mt-3 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
                id='id-list-students'
              >
                {studentsData &&
                  studentsData.map((item, index) => (
                    <Listbox.Option
                      key={index}
                      className={({ active }) =>
                        `relative w-full  text-left bg-white focus:outline-none  ${
                          active ? 'bg-gray-gray12' : 'bg-white'
                        }`
                      }
                      value={item}
                      onClick={() => (window.location.href = pathname + `?id=${item.id}`)}
                      // onClick={() =>
                      //   router.push({
                      //     pathname: path.state,
                      //     query: {
                      //       id: '1'
                      //     }
                      //   })
                      // }
                      // onClick={() => router.push(path.state)}
                    >
                      {({ selected }) => (
                        <div
                          className={`flex items-center gap-2 pb-1 px-2 border-b border-solid cursor-pointer border-1 border-gray-gray12 ${
                            selected ? 'bg-gray-gray12' : 'bg-white'
                          }`}
                        >
                          <div className='border-2 border-solid rounded-full border-primary-blue '>
                            <Image
                              src='https://source.unsplash.com/random'
                              alt=''
                              fill
                              className='object-cover rounded-full !relative !w-[35px] !h-[35px] p-[1px]'
                            ></Image>
                          </div>

                          <div className='flex flex-col gap-1'>
                            <p className='text-black'>{item.attributes.full_name}</p>
                            <span className='text-gray-gray40'>{item.attributes.isu}</span>
                          </div>

                          <svg
                            className='ml-auto '
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M18.5303 8.46967C18.8232 8.76256 18.8232 9.23744 18.5303 9.53033L12.5303 15.5303C12.2374 15.8232 11.7626 15.8232 11.4697 15.5303L5.46967 9.53033C5.17678 9.23744 5.17678 8.76256 5.46967 8.46967C5.76256 8.17678 6.23744 8.17678 6.53033 8.46967L12 13.9393L17.4697 8.46967C17.7626 8.17678 18.2374 8.17678 18.5303 8.46967Z'
                              fill='#5C5C5C'
                            />
                          </svg>
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>

        <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
          <div className='relative mt-1'>
            <Listbox.Button className='relative hidden w-full cursor-pointer lg:block focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
              <Image
                src={selectedLanguage.icon}
                alt=''
                fill
                className='object-cover rounded-full !relative !w-[35px] !h-[35px] p-[1px]'
              ></Image>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options className='absolute z-30 w-auto py-1 mt-3 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm -translate-x-[90%]'>
                {languages.map((language, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `relative cursor-pointer select-none pl-3 py-2 pr-12  ${active ? 'bg-gray-gray4' : 'bg-white'}`
                    }
                    value={language}
                  >
                    {({ selected }) => (
                      <div className='flex items-center gap-4'>
                        <div className='rounded-full h-7 w-7'>
                          <Image
                            src={language.icon}
                            fill
                            sizes='100%'
                            alt=''
                            className='!relative object-cover rounded-full'
                          ></Image>
                        </div>
                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                          {language.name}
                        </span>
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </header>
  )
}

export default Header
