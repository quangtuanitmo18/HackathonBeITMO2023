import Image from 'next/image'
import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import useQueryConfig from '@/hooks/useQueryConfig'
import { useRouter } from 'next/router'
import path from '@/constants/path'
import classNames from 'classnames'
import omit from 'lodash/omit'
import omitBy from 'lodash/omitBy'
const categories = [
  { name: 'be healthy', icon: '/be-healthy.svg', link: 'BeHealthy' },
  { name: 'be fit', icon: '/be-fit.svg', link: 'BeFit' },
  { name: 'be eco', icon: '/be-eco.svg', link: 'BeEco' },
  { name: 'be friendly', icon: '/be-friendly.svg', link: 'BeFriendly' },
  { name: 'be open', icon: '/be-open.svg', link: 'BeOpen' },
  { name: 'be pro', icon: '/be-pro.svg', link: 'BePro' }
]
const ranks = [
  { name: 'университетский', link: 'университетский' },
  { name: 'факультетский', link: 'факультетский' },
  { name: 'межвузовский', link: 'межвузовский' },
  { name: 'международный', link: 'международный' },
  { name: 'всероссийский', link: 'всероссийский' },
  { name: 'региональный', link: 'региональный' },
  { name: 'общественный', link: 'общественный' },
  { name: 'городской', link: 'городской' },
  { name: 'районный', link: 'районный' },
  { name: 'прочее', link: 'прочее' }
]
const Filter = () => {
  const { queryConfigQuery, queryConfigLink } = useQueryConfig()
  const { push } = useRouter()
  const checkCategoryItemFilter = (categoryItem: string) => {
    if (!queryConfigQuery.category) {
      return false
    } else {
      if (queryConfigQuery.category.includes(categoryItem)) {
        return true
      } else {
        return false
      }
    }
  }
  const checkRankItemFilter = (rankItem: string) => {
    if (!queryConfigQuery.rank) {
      return false
    } else {
      if (queryConfigQuery.rank.includes(rankItem)) {
        return true
      } else {
        return false
      }
    }
  }
  const handleFilterCategory = (categoryLink: string) => {
    if (checkCategoryItemFilter(categoryLink)) {
      const indexCategoryLink = queryConfigQuery?.category ? queryConfigQuery?.category?.indexOf(categoryLink) : -1
      let newArrCategory = [...(queryConfigQuery?.category as string[])]
      if (indexCategoryLink > -1) {
        newArrCategory.splice(indexCategoryLink, 1)
      }
      push({
        pathname: path.state,
        query: {
          ...queryConfigLink,
          category: newArrCategory.join()
        }
      })
    } else {
      push({
        pathname: path.state,
        query: {
          ...queryConfigLink,
          category: queryConfigQuery.category ? queryConfigQuery.category + `,${categoryLink}` : '' + `${categoryLink}`
        }
      })
    }
  }
  const handleFilterRank = (rankLink: string) => {
    if (checkRankItemFilter(rankLink)) {
      const indexRankLink = queryConfigQuery?.rank ? queryConfigQuery?.rank?.indexOf(rankLink) : -1
      let newArrRank = [...(queryConfigQuery.rank as string[])]
      if (indexRankLink > -1) {
        newArrRank.splice(indexRankLink, 1)
      }

      push({
        pathname: path.state,
        query: {
          ...queryConfigLink,
          rank: newArrRank.join()
        }
      })
    } else {
      push({
        pathname: path.state,
        query: {
          ...queryConfigLink,
          rank: queryConfigQuery.rank ? queryConfigQuery.rank + `,${rankLink}` : '' + `${rankLink}`
        }
      })
    }
  }
  const handleRemoveAallCategory = () => {
    push({
      pathname: path.state,
      query: omit(
        {
          ...queryConfigLink
        },
        ['category']
      )
    })
  }
  const handleRemoveAallRank = () => {
    push({
      pathname: path.state,
      query: omit(
        {
          ...queryConfigLink
        },
        ['rank']
      )
    })
  }
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
                <li className='' key={index}>
                  <div
                    role='button'
                    aria-pressed='false'
                    className={classNames(
                      `flex gap-1 px-2 py-1 transition-all border border-solid rounded-lg cursor-pointer border-1 border-gray-gray12 hover:bg-gray-gray12`,
                      {
                        'bg-gray-gray12': checkCategoryItemFilter(categoryItem.link)
                      }
                    )}
                    onClick={() => handleFilterCategory(categoryItem.link)}
                  >
                    <Image src={categoryItem.icon} alt='' width={16} height={16}></Image>
                    <p className='text-[12px] leading-[18px]'>{categoryItem.name}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className='flex items-center justify-center gap-2 px-2 py-1 mt-4 transition-all border border-solid rounded-lg cursor-pointer border-1 border-gray-gray12 w-fit hover:bg-gray-gray12'>
              <Image src='bin.svg' alt='' width={16} height={16}></Image>
              <div
                className='text-[12px] leading-[18px]'
                role='button'
                aria-pressed='false'
                onClick={() => handleRemoveAallCategory()}
              >
                Сбросить выбор
              </div>
            </div>
            <p className='text-[12px] leading-4 text-black mt-5'>Уровень</p>

            <ul className='flex gap-2 max-w-[380px] flex-wrap mt-4 text-base-black'>
              {ranks.map((rankItem, index) => (
                <li className='' key={index}>
                  <div
                    className={classNames(
                      'flex gap-1 px-2 py-1 transition-all border border-solid rounded-lg cursor-pointer border-1 border-gray-gray12 hover:bg-gray-gray12',
                      {
                        'bg-gray-gray12': checkRankItemFilter(rankItem.link)
                      }
                    )}
                    role='button'
                    aria-pressed='false'
                    onClick={() => handleFilterRank(rankItem.link)}
                  >
                    <p className='text-[12px] leading-[18px]'>{rankItem.name}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className='flex items-center justify-center gap-2 px-2 py-1 mt-3 border border-solid rounded-lg cursor-pointer border-1 border-gray-gray12 w-fit hover:bg-gray-gray12 '>
              <Image src='bin.svg' alt='' width={16} height={16}></Image>
              <div
                className='text-[12px] leading-[18px] hover:border-gray-gray40 transition-all'
                role='button'
                aria-pressed='false'
                onClick={() => handleRemoveAallRank()}
              >
                Сбросить выбор
              </div>
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Filter
