export interface EventHappendAndNotHappended {
  data: EventHappendAndNotHappendedData
}

export interface EventHappendAndNotHappendedData {
  eventsHappended: EventsHappended[]

  eventsNotHappended: EventNotHappendedData[]
}

export interface EventNotHappendedData {
  id: number
  name: string
  start_time: Date
  end_time: Date
  type: string
  categoryEvent: string[]
}
export interface EventsHappended {
  id: number
  name: string
  start_time: Date
  end_time: Date
  type: string
  categoryEvent: string[]
}
