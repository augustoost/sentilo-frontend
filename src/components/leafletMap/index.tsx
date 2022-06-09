import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import LeafletRoutingMachine from '../leafletRoutingMachine'

interface ILeafletMapProps {
  observations: Sentilo.IObservations[]
}

const LeafletMap = ({ observations }: ILeafletMapProps) => {
  return (
    <MapContainer doubleClickZoom={false} id="mapId" zoom={18} center={[-24.731328, -53.7658764]}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LeafletRoutingMachine observations={observations} />
    </MapContainer>
  )
}

export default LeafletMap
