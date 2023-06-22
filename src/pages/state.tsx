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
    <MainLayout heading='Состояние'>
      <div className='flex flex-col gap-10 lg:flex-row'>
        <div className='lg:w-[35%]  p-5 border border-solid border-gray-gray12 rounded-md flex flex-col gap-6 items-center justify-center'>
          <p className='text-black text-[14px] leading-[22px] font-bold '>Общий показатель вовлеченности</p>
          <div className=' max-w-[360px] h-[130px] flex items-center justify-center'>
            {scoreBeItmo ? <GaugeChart beValue={beValueGauge as number[]}></GaugeChart> : <Loading></Loading>}
          </div>
        </div>

        <div className='lg:w-[65%] h-[250px] p-5 border border-solid border-gray-gray12 rounded-md flex items-center justify-center'>
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
      <div className='flex flex-col mt-6 lg:flex-row lg:gap-6'>
        <MyEvents eventsNotHappended={eventsNotHappended as EventNotHappendedData[]}></MyEvents>
        <Events></Events>
      </div>
    </MainLayout>
  )
}

export default State
