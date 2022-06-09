import L from 'leaflet'

export const getWaypoints = (observations: Sentilo.IObservations[]): L.LatLng[]  => {
  console.log({observations})
  if (observations) {
    return(  
      observations.map(observation => {
        const latLong = observation.location.split(' ');
          return L.latLng(parseFloat(latLong[0]), parseFloat(latLong[1]))
      }) 
    )    
  }

  return [] as L.LatLng[];
}