import L from 'leaflet'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import 'leaflet-routing-machine'
import { useMap } from 'react-leaflet'
import { getRoutes } from '../../utils/getRoutes'
import { useEffect } from 'react'

L.Marker.prototype.options.icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png'
})

//  const LeafletRoutingMachine = ({ observations }) => {
//   const map = useMap()
//   const myRoutes = getRoutes(observations)

//   if (!map) return

//   myRoutes.forEach((routesByDate, index) => {
//     const myPlan = new L.Routing.Plan(routesByDate.waypoints, {
//       addWaypoints: false,
//       createMarker: function (index, waypoint, numberWaypoints) {
//         if (index === 0 || index === numberWaypoints - 1) {
//           return L.marker(waypoint.latLng)
//         } else {
//           return false
//         }
//       }
//     });

//     const leafletElement = L.Routing.control({
//       waypoints: routesByDate.waypoints,
//       plan: myPlan,
//       lineOptions: {
//         styles: [{ color:  '#6FA1EC', weight: 4 }],
//         extendToWaypoints: false,
//         missingRouteTolerance: 1,
//         addWaypoints: false
//       }
//     }).addTo(map);
//   })

//   return leafletElement.getPlan()
// }

// export default withLeaflet(LeafletRoutingMachine)

export const LeafletRoutingMachine = ({ observations }) => {
  const map = useMap()
  const myRoutes = getRoutes(observations)

  useEffect(() => {
    if (!map) return

    myRoutes.forEach((routesByDate, index) => {
      const myPlan = new L.Routing.Plan(routesByDate.waypoints, {
        addWaypoints: false,
        createMarker: function (index, waypoint, numberWaypoints) {
          if (index === 0 || index === numberWaypoints - 1) {
            return L.marker(waypoint.latLng)
          } else {
            return false
          }
        }
      })

      L.Routing.control({
        waypoints: routesByDate.waypoints,
        plan: myPlan,
        lineOptions: {
          styles: [{ color: index === 0 ? '#6FA1EC' : '#165', weight: 4 }],
          extendToWaypoints: false,
          missingRouteTolerance: 1,
          addWaypoints: false
        }
      }).addTo(map)
    })
  }, [map])

  return null
}
