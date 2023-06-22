import MainLayout from '@/layouts/mainLayout'
import Events from '@/page-sections/state/events'
import GaugeChart from '@/page-sections/state/gaugeChart'
import LineChart from '@/page-sections/state/lineChart'
import MyEvents from '@/page-sections/state/myEvents'
import useQueryConfig from '@/hooks/useQueryConfig'
import { useQuery } from '@tanstack/react-query'
import { scoreBeItmoApi } from '@/apis/scoreBeItmo/scoreBeItmo.api'
import Loading from '@/components/loading'
import { eventsApi } from '@/apis/events/events.api'
import { EventNotHappendedData } from '@/types/events/eventHappendAndNotHappend.type'
import { calcBeValueGauge } from '@/utils/app'
import Image from 'next/image'

const State = () => {
  const { queryConfigQuery } = useQueryConfig()
  const { data: scoreBeItmo, isLoading: isLoadingscoreBeItmo } = useQuery({
    queryKey: ['scoreBeItmo', queryConfigQuery.id],
    queryFn: () => scoreBeItmoApi.getScoreBeItmo({ id: queryConfigQuery.id as string }),
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000,
    enabled: queryConfigQuery.id !== ''
  })
  const { data: eventsHappendAndNotHappend, isLoading: isLoadingEventsHappendAndNotHappend } = useQuery({
    queryKey: ['eventsHappendAndNotHappend', queryConfigQuery.id],
    queryFn: () => eventsApi.getEventsNotHappend({ id: queryConfigQuery.id as string }),
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000,
    enabled: queryConfigQuery.id !== ''
  })
  const eventsNotHappended = eventsHappendAndNotHappend?.data.data.eventsNotHappended

  const scoreCategory = scoreBeItmo?.data.data.scoreCategory
  const beValue = [
    Number(scoreCategory?.BeHealthy) > 100 ? 100 : Number(scoreCategory?.BeHealthy),
    Number(scoreCategory?.BeFit) > 100 ? 100 : Number(scoreCategory?.BeFit),
    Number(scoreCategory?.BePro) > 100 ? 100 : Number(scoreCategory?.BePro),
    Number(scoreCategory?.BeFriendly) > 100 ? 100 : Number(scoreCategory?.BeFriendly),
    Number(scoreCategory?.BeEco) > 100 ? 100 : Number(scoreCategory?.BeEco),
    Number(scoreCategory?.BeOpen) > 100 ? 100 : Number(scoreCategory?.BeOpen),
    0
  ]
  // console.log(beValue)
  const beValueGauge = [calcBeValueGauge(beValue), 100 - Number(calcBeValueGauge(beValue))]

  return (
    <MainLayout heading='Дашборд'>
      <div className='flex flex-col flex-wrap gap-10 xl:flex-row xl:flex-nowrap'>
        <div className=' xl:w-[35%] lg:w-[40%] sm:w-[60%]   p-5 border border-solid border-gray-gray12 rounded-md flex flex-col gap-6 items-center justify-center'>
          <p className='text-black text-[14px] leading-[22px] font-bold '>Общий показатель вовлеченности</p>
          <div className=' max-w-[360px] h-[130px] flex items-center justify-center'>
            {scoreBeItmo ? <GaugeChart beValue={beValueGauge as number[]}></GaugeChart> : <Loading></Loading>}
          </div>
        </div>
        <div className='xl:w-[65%] w-[100%] h-[250px] p-5 border border-solid border-gray-gray12 rounded-md flex items-center justify-center'>
          {scoreBeItmo ? (
            <LineChart beValue={beValue as number[]}></LineChart>
          ) : (
            <div className='flex items-center justify-center'>
              <Loading></Loading>
            </div>
          )}
        </div>
      </div>

      {/* <Filter></Filter>  */}
      <div className='flex flex-col gap-6 pb-6 mt-6 2xl:flex-row 2xl:pb-0'>
        <div className='flex flex-col w-full gap-2 2xl:w-1/2'>
          <div className='w-full  p-5 border border-solid rounded-md border-1 border-gray-gray12 h-[300px] '>
            <p className='font-bold'>Мои мероприятия</p>
            {eventsHappendAndNotHappend ? (
              <MyEvents eventsNotHappended={eventsNotHappended as EventNotHappendedData[]}></MyEvents>
            ) : (
              <div className='flex items-center justify-center h-full'>
                <Loading></Loading>
              </div>
            )}
          </div>
          <div className='p-4 border border-solid rounded-md w-fullp-4 border-1 border-gray-gray12'>
            <p className='mb-3 font-bold'>Рекомендации</p>
            <div className='grid grid-cols-3 gap-2'>
              <div className='h-full col-span-1'>
                <Image
                  src='/my-service-3.png'
                  className='!relative object-cover !w-full !h-full'
                  fill
                  sizes='100%'
                  alt={''}
                ></Image>
              </div>
              <div className='h-full col-span-1'>
                {' '}
                <Image
                  src='/my-service-1.png'
                  className='!relative object-cover !w-full !h-full'
                  fill
                  sizes='100%'
                  alt={''}
                ></Image>
              </div>
              <div className='h-full col-span-1'>
                {' '}
                <Image
                  src='/my-service-2.png'
                  className='!relative object-cover !w-full !h-full rounded-md'
                  fill
                  sizes='100%'
                  alt={''}
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <Events></Events>
      </div>
    </MainLayout>
  )
}

export default State
