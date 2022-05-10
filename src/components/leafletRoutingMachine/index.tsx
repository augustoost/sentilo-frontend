import { useEffect } from 'react'
import L, { Routing } from 'leaflet'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import 'leaflet-routing-machine'
import { useMap } from 'react-leaflet'

L.Marker.prototype.options.icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png'
})

const MyRouting = () => {
  const map = useMap()

  // Waypoints used to calculate the route.
  const myWaypoints = [
    L.latLng(parseFloat('-24.732398'), parseFloat('-53.7634314')),
    L.latLng(parseFloat('-24.7298195'), parseFloat('-53.7633335')),
    L.latLng(parseFloat('-24.7295053'), parseFloat('-53.759723')),
    L.latLng(parseFloat('-24.7198386'), parseFloat('-53.7611316')),
    L.latLng(parseFloat('-24.7201591'), parseFloat('-53.7431879')),
    L.latLng(parseFloat('-24.7210014'), parseFloat('-53.7437236'))
  ]

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
