export interface EventFutureNotRegister {
  data: EventFutureNotRegisterData
}

export interface EventFutureNotRegisterData {
  eventsNotHappend: EventsNotHappend[]
}

export interface EventsNotHappend {
  id: number
  name: string
  start_time: Date
  end_time: Date
  type: string
  categoryEvent: CategoryEvent[]
}

export enum CategoryEvent {
  BeEco = 'BeEco',
  BeFit = 'BeFit',
  BeFriendly = 'BeFriendly',
  BeHealthy = 'BeHealthy',
  BeOpen = 'BeOpen',
  BePro = 'BePro'
}
