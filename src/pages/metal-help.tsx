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
    <MainLayout heading='Ментальная помощь'>
      <div className='flex flex-col flex-wrap gap-6 lg:flex-row 2xl:flex-nowrap'>
        <div className='2xl:w-[33%] lg:w-[45%] w-full grid gap-6'>
          <div className='flex flex-col items-center justify-center gap-6 p-5 border border-solid rounded-md border-gray-gray12 '>
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

          <div className='flex flex-col items-center justify-center gap-6 p-5 border border-solid rounded-md border-gray-gray12'>
            <Appreciate></Appreciate>
          </div>
        </div>

        <div className='2xl:w-[24%] lg:w-[45%] w-full p-5 border border-solid border-gray-gray12 rounded-md '>
          <Newspaper></Newspaper>
        </div>
        <div className='2xl:w-[43%] lg:w-[45%] w-full p-5 border border-solid border-gray-gray12 rounded-md '>
          <MetalTest></MetalTest>
        </div>
      </div>
      <div className='p-5 my-6 border border-solid rounded-md lg:w-full border-gray-gray12'>
        <Consultation></Consultation>
      </div>
    </MainLayout>
  )
}

export default State
