import { useEffect } from 'react'
import L, { Routing } from 'leaflet'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import 'leaflet-routing-machine'
import { useMap } from 'react-leaflet'
import { getWaypoints } from '../../utils/getWaypoints'

L.Marker.prototype.options.icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png'
})

interface IMyRoutingProps {
  observations: Sentilo.IObservations[]
}

const MyRouting = ({ observations }: IMyRoutingProps) => {
  const map = useMap()

  const myWaypoints = getWaypoints(observations)
  // Create a new Plan to set the right markers.
  // index: index of the waypoint.
  // waypoint: the waypoint.
  // numberWaypoints: total of waypoints in the route.
  // createMarker is with an error, because the type declaration isn't correct but dosen't matter.

  const myPlan = new L.Routing.Plan(myWaypoints, {
    addWaypoints: false,
    createMarker: function (index: number, waypoint: Routing.Waypoint, numberWaypoints: number) {
      if (index === 0 || index === numberWaypoints - 1) {
        return L.marker(waypoint.latLng)
      } else {
        return false
      }
    }
  })

  useEffect(() => {
    if (!map) return

    L.Routing.control({
      waypoints: myWaypoints,
      plan: myPlan,
      lineOptions: {
        styles: [{ color: '#6FA1EC', weight: 4 }],
        extendToWaypoints: false,
        missingRouteTolerance: 1,
        addWaypoints: false
      }
    }).addTo(map)
  }, [map])

  return null
}

export default MyRouting
