import Image from 'next/image'

const MetalTest = () => {
  return (
    <div className='flex-col'>
      <p className='text-[14px] font-bold mb-5 -ml-1 -mt-1'>Ментальное тестирование</p>
      <div className='grid grid-row-2 grid-cols-2 justify-items-center gap-4'>
        <div className='col-span-1 relative'>
          <Image
            className='!relative !w-[203px] !h-[150px] rounded-lg'
            src={'/photo-size-1.png'}
            alt='event'
            sizes='100%'
            fill
          />
          <div className='absolute ml-4 -mt-10 max-w-[157px] max-h-[26px] rounded-lg bg-secondary_light-green_light text-black'>
            <p className='text-[12px] font-semibold leading-[18px] py-1 px-2'>Ментальное состояние</p>
          </div>
        </div>
        <div className='col-span-1 relative'>
          <Image
            className='!relative !w-[203px] !h-[150px] rounded-lg'
            src={'/photo-size-2.png'}
            alt='event'
            sizes='100%'
            fill
          />
          <div className='absolute ml-4 -mt-10 max-w-[157px] max-h-[26px] rounded-lg bg-secondary_light-purple_light text-black'>
            <p className='text-[12px] font-semibold leading-[18px] py-1 px-2'>Психотип личности</p>
          </div>
        </div>
        <div className='col-span-1 relative'>
          <Image
            className='!relative !w-[203px] !h-[150px] rounded-lg'
            src={'/photo-size-1.png'}
            alt='event'
            sizes='100%'
            fill
          />
          <div className='absolute ml-4 -mt-10 max-w-[157px] max-h-[26px] rounded-lg bg-secondary_light-green_light text-black'>
            <p className='text-[12px] font-semibold leading-[18px] py-1 px-2'>Психотип личности </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MetalTest
