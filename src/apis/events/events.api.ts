import { EventFutureNotRegister } from '@/types/events/eventFutureNotRegister.type'
import { EventHappendAndNotHappended } from '@/types/events/eventHappendAndNotHappend.type'
import { FilterEvent } from '@/types/events/filterEvent.type'
import { http } from '@/utils/http'

export const URL_GET_EVENT_NOT_HAPPENED = 'user-event/registered-events/'
export const URL_GET_EVENT_FUTURE_NOT_REGISTER = 'user-event/not-registered-events/'
export const URL_GET_EVENT_FILTER = 'user-event/filter-event/'
export const eventsApi = {
  getEventsNotHappend({ id }: { id: string }) {
    return http.get<EventHappendAndNotHappended>(`${URL_GET_EVENT_NOT_HAPPENED}${id}`)
  },
  getEventsFutureNotRegister({ id }: { id: string }) {
    return http.get<EventFutureNotRegister>(`${URL_GET_EVENT_FUTURE_NOT_REGISTER}${id}`)
  },
  getFilterEvents({ id, category, rank }: { id: string; category?: string[]; rank?: string[] }) {
    return http.post<FilterEvent>(`${URL_GET_EVENT_FILTER}${id}`, { category: category, rank: rank })
  }
}
