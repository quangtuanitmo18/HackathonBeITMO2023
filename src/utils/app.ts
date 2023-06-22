import { ChartArea } from 'chart.js'
import { EventNotHappendedData } from '@/types/events/eventHappendAndNotHappend.type'

export const checkColorchart = (y: number) => {
  if (y <= 33) {
    return '#E34029'
  } else if (y >= 34 && y <= 66) {
    return '#F39B0A'
  } else {
    return '#23B318'
  }
}
let width: number, height: number, gradient: any
export default function getGradient(ctx: CanvasRenderingContext2D, chartArea: ChartArea) {
  const chartWidth = chartArea.right - chartArea.left
  const chartHeight = chartArea.bottom - chartArea.top
  if (!gradient || width !== chartWidth || height !== chartHeight) {
    // Create the gradient because this is either the first render
    // or the size of the chart has changed
    width = chartWidth
    height = chartHeight
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top)
    gradient.addColorStop(0, '#E34029')
    gradient.addColorStop(0.5, '#F39B0A')
    gradient.addColorStop(1, '#23B318')
  }

  return gradient
}

export const getTime = ({ dateString, withYear = true }: { dateString: Date; withYear?: boolean }) => {
  var dateObj = new Date(dateString)
  var month = dateObj.getMonth() + 1 //months from 1-12
  var day = dateObj.getDate()
  var year = dateObj.getFullYear()
  return withYear ? day + '.' + month + '.' + year : day + '.' + month
}

export const getColorTextBeWithCategoryEvent = ({
  itemEvent,
  type = 'dark'
}: {
  itemEvent?: EventNotHappendedData
  type?: string
}) => {
  if (!itemEvent?.categoryEvent) {
    return 'text-white'
  } else {
    if (itemEvent?.categoryEvent[0] == 'BePro') {
      return type === 'dark' ? 'text-be-pro' : 'text-be-pro_light'
    } else if (itemEvent?.categoryEvent[0] == 'BeEco') {
      return type === 'dark' ? 'text-be-eco' : 'text-be-eco_light'
    } else if (itemEvent?.categoryEvent[0] == 'BeFit') {
      return type === 'dark' ? 'text-be-fit' : 'text-be-fit_light'
    } else if (itemEvent?.categoryEvent[0] == 'BeHealthy') {
      return type === 'dark' ? 'text-be-healthy' : 'text-be-healthy_light'
    } else if (itemEvent?.categoryEvent[0] == 'BeOpen') {
      return type === 'dark' ? 'text-be-open' : 'text-be-open_light'
    } else if (itemEvent?.categoryEvent[0] == 'BeFriendly') {
      return type === 'dark' ? 'text-be-friendly' : 'text-be-friendly_light'
    } else {
      return 'text-white'
    }
  }
}
export const getColorBGBeWithCategoryEvent = ({
  itemEvent,
  type = 'dark'
}: {
  itemEvent?: EventNotHappendedData
  type?: string
}) => {
  if (!itemEvent?.categoryEvent) {
    return 'bg-gray-gray40'
  } else {
    if (itemEvent.categoryEvent[0] == 'BePro') {
      return type === 'dark' ? 'bg-be-pro' : 'bg-be-pro_light'
    } else if (itemEvent.categoryEvent[0] == 'BeEco') {
      return type === 'dark' ? 'bg-be-eco' : 'bg-be-eco_light'
    } else if (itemEvent.categoryEvent[0] == 'BeFit') {
      return type === 'dark' ? 'bg-be-fit' : 'bg-be-fit_light'
    } else if (itemEvent.categoryEvent[0] == 'BeHealthy') {
      return type === 'dark' ? 'bg-be-healthy' : 'bg-be-healthy_light'
    } else if (itemEvent.categoryEvent[0] == 'BeOpen') {
      return type === 'dark' ? 'bg-be-open' : 'bg-be-open_light'
    } else if (itemEvent.categoryEvent[0] == 'BeFriendly') {
      return type === 'dark' ? 'bg-be-friendly' : 'bg-be-friendly_light'
    } else {
      return 'bg-gray-gray40'
    }
  }
}

export const HoverColorBGBeWithCategoryEvent = ({
  itemEvent,
  type = 'dark'
}: {
  itemEvent?: EventNotHappendedData
  type?: string
}) => {
  if (!itemEvent?.categoryEvent) {
    return 'group-hover:bg-gray-gray60'
  } else {
    if (itemEvent.categoryEvent[0] == 'BePro') {
      return type === 'dark' ? 'group-hover:bg-be-pro' : 'group-hover:bg-be-pro_light'
    } else if (itemEvent.categoryEvent[0] == 'BeEco') {
      return type === 'dark' ? 'group-hover:bg-be-eco' : 'group-hover:bg-be-eco_light'
    } else if (itemEvent.categoryEvent[0] == 'BeFit') {
      return type === 'dark' ? 'group-hover:bg-be-fit' : 'group-hover:bg-be-fit_light'
    } else if (itemEvent.categoryEvent[0] == 'BeHealthy') {
      return type === 'dark' ? 'group-hover:bg-be-healthy' : 'group-hover:bg-be-healthy_light'
    } else if (itemEvent.categoryEvent[0] == 'BeOpen') {
      return type === 'dark' ? 'group-hover:bg-be-open' : 'group-hover:bg-be-open_light'
    } else if (itemEvent.categoryEvent[0] == 'BeFriendly') {
      return type === 'dark' ? 'group-hover:bg-be-friendly' : 'group-hover:bg-be-friendly_light'
    } else {
      return 'group-hover:bg-gray-gray60'
    }
  }
}

export const HoverColorTextBeWithCategoryEvent = ({
  itemEvent,
  type = 'dark'
}: {
  itemEvent?: EventNotHappendedData
  type?: string
}) => {
  if (!itemEvent?.categoryEvent) {
    return 'group-hover:text-white'
  } else {
    if (itemEvent?.categoryEvent[0] == 'BePro') {
      return type === 'dark' ? 'group-hover:text-be-pro' : 'group-hover:text-be-pro_light'
    } else if (itemEvent?.categoryEvent[0] == 'BeEco') {
      return type === 'dark' ? 'group-hover:text-be-eco' : 'group-hover:text-be-eco_light'
    } else if (itemEvent?.categoryEvent[0] == 'BeFit') {
      return type === 'dark' ? 'group-hover:text-be-fit' : 'group-hover:text-be-fit_light'
    } else if (itemEvent?.categoryEvent[0] == 'BeHealthy') {
      return type === 'dark' ? 'group-hover:text-be-healthy' : 'group-hover:text-be-healthy_light'
    } else if (itemEvent?.categoryEvent[0] == 'BeOpen') {
      return type === 'dark' ? 'group-hover:text-be-open' : 'group-hover:text-be-open_light'
    } else if (itemEvent?.categoryEvent[0] == 'BeFriendly') {
      return type === 'dark' ? 'group-hover:text-be-friendly' : 'group-hover:text-be-friendly_light'
    } else {
      return 'group-hover:text-white'
    }
  }
}

export const calcBeValueGauge = (beValue: number[]) => {
  let result = beValue.reduce((partialSum, a) => partialSum + a, 0)
  return (result / 6).toFixed(0)
}
