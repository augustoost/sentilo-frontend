import React from 'react'
import LeafletMap from '../../components/leafletMap'
import { useLocation } from 'react-router-dom'

export const Map = () => {
  const { state } = useLocation()

  return <LeafletMap observations={state.observations} />
}
