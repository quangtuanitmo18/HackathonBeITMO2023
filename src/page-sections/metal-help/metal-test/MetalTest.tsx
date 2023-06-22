import Image from 'next/image'

const MetalTest = () => {
  return (
    <div className='flex flex-col h-full gap-5'>
      <p className='text-[14px] font-bold'>Ментальное тестирование</p>
      <div className='grid h-full grid-cols-2 grid-rows-2 gap-4 justify-items-center'>
        <div className='relative w-full col-span-1'>
          <Image
            className='!relative  rounded-lg !w-full !h-full object-cover'
            src={'/photo-size-1.png'}
            alt='event'
            sizes='100%'
            fill
          />
          <div className='absolute text-black -translate-x-1/2 rounded-lg bg-secondary_light-green_light left-1/2 bottom-2 w-[80%]'>
            <p className='text-[12px] font-semibold leading-[18px] py-1 px-2'>Ментальное состояние</p>
          </div>
        </div>
        <div className='relative w-full col-span-1'>
          <Image
            className='!relative rounded-lg !w-full !h-full object-cover'
            src={'/photo-size-2.png'}
            alt='event'
            sizes='100%'
            fill
          />
          <div className='absolute text-black -translate-x-1/2 rounded-lg bg-secondary_light-green_light left-1/2 bottom-2 w-[80%]'>
            <p className='text-[12px] font-semibold leading-[18px] py-1 px-2'>Психотип личности</p>
          </div>
        </div>
        <div className='relative w-full col-span-1'>
          <Image
            className='!relative !w-full !h-full object-cover rounded-lg'
            src={'/photo-size-1.png'}
            alt='event'
            sizes='100%'
            fill
          />
          <div className='absolute text-black -translate-x-1/2 rounded-lg bg-secondary_light-green_light left-1/2 bottom-2 w-[80%]'>
            <p className='text-[12px] font-semibold leading-[18px] py-1 px-2'>Психотип личности </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MetalTest
