import LeafletMap from '../../components/leafletMap'
import { useLocation } from 'react-router-dom'

interface IStateProps {
  observations: Sentilo.IObservations[]
}

export const Map = () => {
  const location = useLocation()
  const { observations } = location.state as IStateProps

  return <LeafletMap observations={observations} />
}
