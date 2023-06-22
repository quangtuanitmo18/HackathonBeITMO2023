import { Beeco, Befit, Befriendly, Behealthy, Beopen, Bepro } from '@/components/icons'
import { EventsNotHappend } from '@/types/events/eventFutureNotRegister.type'
import React from 'react'
interface Props {
  itemEvent: EventsNotHappend
}
const CheckIcon = (props: Props) => {
  const { itemEvent } = props
  const returnComponenticon = () => {
    if (itemEvent.categoryEvent[0] == 'BePro') {
      return <Bepro></Bepro>
    } else if (itemEvent.categoryEvent[0] == 'BeHealthy') {
      return <Behealthy></Behealthy>
    }
    if (itemEvent.categoryEvent[0] == 'BeEco') {
      return <Beeco></Beeco>
    }
    if (itemEvent.categoryEvent[0] == 'BeFriendly') {
      return <Befriendly></Befriendly>
    }
    if (itemEvent.categoryEvent[0] == 'BeFit') {
      return <Befit></Befit>
    }
    if (itemEvent.categoryEvent[0] == 'BeOpen') {
      return <Beopen></Beopen>
    }
  }
  return <>{returnComponenticon()}</>
}

export default CheckIcon
