
import MainLayout from '@/layouts/mainLayout'
import GaugeChart from '@/page-sections/state/gaugeChart'
import Appreciate from '@/page-sections/metal-help/appreciate'
import Image from 'next/image'
import Newspaper from '@/page-sections/metal-help/newspaper'
import MetalTest from '@/page-sections/metal-help/metal-test'
import Consultation from '@/page-sections/metal-help/consultation'

const State = () => {
  const beValueGauge = [87, 13]
  return (
    <MainLayout heading='Состояние'>
      <div className='flex flex-col lg:flex-row gap-6'>
        <div className='lg:w-[33%] grid gap-6'>
          <div className='p-5 flex flex-col gap-6 items-center justify-center border border-solid border-gray-gray12 rounded-md  max-h-[205px]'>
            <div className='flex gap-2'>
              <p className='text-black text-[14px] leading-[22px] font-bold -ml-1 -mt-1'>
                Общий показатель Удовлетворенности
              </p>
              <span className='-mt-1'>
                <Image
                  className='!relative !w-[19.5px] !h-[19.5px]'
                  src={'/icon-question.svg'}
                  alt='event'
                  sizes='100%'
                  fill
                />
              </span>
            </div>

            <div className=' max-h-[127px]'>
              <GaugeChart beValue={beValueGauge}></GaugeChart>
            </div>
          </div>

          <div className='p-5 flex flex-col gap-6 items-center justify-center  max-h-[161px] border border-solid border-gray-gray12 rounded-md'>
            <Appreciate></Appreciate>
          </div>
        </div>

        <div className='lg:w-[24%] max-h-[390px] p-5 border border-solid border-gray-gray12 rounded-md '>
          <Newspaper></Newspaper>
        </div>
        <div className='lg:w-[43%] max-h-[390px] p-5 border border-solid border-gray-gray12 rounded-md '>
          <MetalTest></MetalTest>
        </div>
      </div>
      <div className='lg:w-full max-h-[400px] p-5 border border-solid border-gray-gray12 rounded-md mt-6'>
        <Consultation></Consultation>
      </div>
    </MainLayout>
  )
}

export default State
