import L from 'leaflet'
import moment from 'moment'

export const getRoutes = (observations) => {
  return observations.reduce((prev, current) => {
    let index = prev.findIndex(
      (obsPrev) => moment(obsPrev.routeDate, 'DD/MM/YYYY').format() === moment(current.timestamp, 'DD/MM/YYYY').format()
    )

    if (index < 0) {
      index = prev.length
      prev.push({
        routeDate: moment(current.timestamp, 'DD/MM/YYYY').format('DD/MM/YYYY'),
        waypoints: []
      })
    }

    prev[index].waypoints.push(
      L.latLng(parseFloat(current.location.split(' ')[0]), parseFloat(current.location.split(' ')[1]))
    )

    return prev
  }, [])
}
