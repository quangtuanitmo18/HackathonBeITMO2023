export interface FilterEvent {
  data: FilterEventDaTa
}

export interface FilterEventDaTa {
  eventsHappendedResult: EventsEdResult[]
  eventsRegisteredResult: EventsEdResult[]
  eventsNotRegisteredResult: EventsEdResult[]
}

export interface EventsEdResult {
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
