import React from 'react'

import sentiloApi from '../../services/sentilo'
import { SensorsList } from '../../components/sensorsList'

export const SensorList = () => {
  const [sensors, setSensors] = React.useState([] as Sentilo.ISensors[])

  React.useEffect(() => {
    getAllSensors()
  }, [])

  const getAllSensors = async () => {
    const { data } = await sentiloApi.get<Sentilo.ISensors[]>(
      `/data/${import.meta.env.VITE_APP_SENTILO_UTFPR_PROVIDERID}?limit=1000`
    )

    setSensors(data.sensors)
  }

  return <SensorsList sensors={sensors} />
}
