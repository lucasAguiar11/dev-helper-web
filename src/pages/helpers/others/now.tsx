import moment from 'moment-timezone'
import { useEffect, useState } from 'react'

import { Metadata } from '../../../components/Metadata'
import { Clock } from '../../../components/primitives/Clock'
import SideMenu from '../../../components/SideMenu'

type NowProps = {
  timeZone: string
  date: moment.Moment
}

const Now = () => {
  const [dates, setDates] = useState<NowProps[]>()

  const tick = () => {
    const dates = [
      {
        timeZone: 'UTC',
        date: moment.utc(),
      },
      {
        timeZone: 'America/Sao_Paulo',
        date: moment().tz('America/Sao_Paulo'),
      },
      {
        timeZone: 'Europe/Lisbon',
        date: moment().tz('Europe/Lisbon'),
      },
      {
        timeZone: 'America/New_York',
        date: moment.tz('America/New_York'),
      },
      {
        timeZone: 'Europe/London',
        date: moment.tz('Europe/London'),
      },
      {
        timeZone: 'Australia/Sydney',
        date: moment.tz('Australia/Sydney'),
      },
      {
        timeZone: 'America/Toronto',
        date: moment.tz('America/Toronto'),
      },
      {
        timeZone: 'Asia/Tokyo',
        date: moment.tz('Asia/Tokyo'),
      },
      {
        timeZone: 'Asia/Berlin',
        date: moment.tz('Asia/Berlin'),
      },
    ]
    setDates(dates)
  }

  useEffect(() => {
    const timer = setInterval(() => tick(), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <Metadata
        title="Quer horas são? UTC - Tempo Universal Coordenado"
        description="Hora exata agora, fuso horário, diferença entre horário e informações chave para UTC."
        canonical="/helpers/others/now"
      />
      <SideMenu section="others" helper="now">
        <div className="flex flex-col">
          <h2 className="mt-3 mb-5 mx-2 text-2xl font-medium tracking-tight text-gray-900">
            Que horas são?
          </h2>
          <div className="mx-2 grid sm:grid-cols-4">
            {dates?.map(({ date, timeZone }) => (
              <div className="m-2" key={timeZone}>
                <h3 className="text-sm text-gray-700 font-medium">{timeZone}</h3>
                <Clock date={date} />
              </div>
            ))}
          </div>
        </div>
      </SideMenu>
    </>
  )
}

export default Now
