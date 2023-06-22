import Image from 'next/image'
import { Calendar } from 'react-calendar'
import { useState } from 'react'
import 'react-calendar/dist/Calendar.css'

const Consultation = () => {
  const [date, setDate] = useState(new Date())
  function onChange(nextDate: any) {
    setDate(nextDate)
  }
  return (
    <div className=''>
      <p className='text-[14px] font-bold mb-5 -ml-1 -mt-1'>Ментальное тестирование</p>

      <div className='grid grid-cols-3 justify-items-center'>
        <div className=' col-span-1 bg-white p-4 rounded-lg drop-shadow-lg'>
          <Calendar onChange={onChange} value={date} />
        </div>
        <div className='col-span-2 w-full'>
          <div className='flex ml-6 max-w-[257px] max-h-[40px] rounded-lg bg-[#EDF0FB] text-black'>
            <p className='font-semibold leading-[24px] p-2'>Сегодня </p>
            <p className='leading-[24px] py-2 pl-1 pr-2'>10 февраля, пятница</p>
          </div>
          <div className='ml-6 my-4 font-semibold leading-[24px]'>Ближайшие приемы</div>
          <div className='grid grid-cols-12 ml-6 mb-[18px]'>
            <div className='col-span-1'>
              <Image
                className='!relative !w-[48px] !h-[48px] rounded-full'
                src={'/photo-size-1.png'}
                alt='ava'
                sizes='100%'
                fill
              />
            </div>
            <div className='col-span-2 flex items-center text-[14px] leading-[22px]'>Грекова А. А.</div>
            <div className='col-span-4 flex items-center text-[12px] text-[#858585] leading-[18px]'>
              Ауд. 202, Кронверкский пр., д.49, лит.А
            </div>
            <div className='col-span-2 flex items-center text-[14px] leading-[22px]'>10.02.2021</div>
            <div className='col-span-1 flex items-center text-[14px] leading-[22px]'>11:00</div>
            <div className='col-span-2 flex items-center'>
              <button className='px-4 py-2 font-semibold leading-5 text-white text-[14px] bg-primary-blue rounded-md'>
                Записаться
              </button>
            </div>
          </div>
          <div className='grid grid-cols-12 ml-6 mb-[18px]'>
            <div className='col-span-1'>
              <Image
                className='!relative !w-[48px] !h-[48px] rounded-full'
                src={'/photo-size-1.png'}
                alt='ava'
                sizes='100%'
                fill
              />
            </div>
            <div className='col-span-2 flex items-center text-[14px] leading-[22px]'>Грекова А. А.</div>
            <div className='col-span-4 flex items-center text-[12px] text-[#858585] leading-[18px]'>
              Ауд. 202, Кронверкский пр., д.49, лит.А
            </div>
            <div className='col-span-2 flex items-center text-[14px] leading-[22px]'>10.02.2021</div>
            <div className='col-span-1 flex items-center text-[14px] leading-[22px]'>11:00</div>
            <div className='col-span-2 flex items-center'>
              <button className='px-4 py-2 font-semibold leading-5 text-white text-[14px] bg-primary-blue rounded-md'>
                Записаться
              </button>
            </div>
          </div>
          <div className='grid grid-cols-12 ml-6 mb-[18px]'>
            <div className='col-span-1'>
              <Image
                className='!relative !w-[48px] !h-[48px] rounded-full'
                src={'/photo-size-1.png'}
                alt='ava'
                sizes='100%'
                fill
              />
            </div>
            <div className='col-span-2 flex items-center text-[14px] leading-[22px]'>Грекова А. А.</div>
            <div className='col-span-4 flex items-center text-[12px] text-[#858585] leading-[18px]'>
              Ауд. 202, Кронверкский пр., д.49, лит.А
            </div>
            <div className='col-span-2 flex items-center text-[14px] leading-[22px]'>10.02.2021</div>
            <div className='col-span-1 flex items-center text-[14px] leading-[22px]'>11:00</div>
            <div className='col-span-2 flex items-center'>
              <button className='px-4 py-2 font-semibold leading-5 text-white text-[14px] bg-primary-blue rounded-md'>
                Записаться
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Consultation
