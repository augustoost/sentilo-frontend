import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

interface ISensorsList {
  sensors: Sentilo.ISensors[]
}

export const SensorsList = ({ sensors }: ISensorsList) => {
  const navigation = useNavigate()

  return (
    <TableContainer sx={{ marginTop: 5, display: 'flex', justifyContent: 'center' }}>
      <Table sx={{ width: 1 / 2, minWidth: 650 }} size="medium">
        <TableHead>
          <TableRow>
            <TableCell>Sensor</TableCell>
            <TableCell align="center" width={200}>
              Mapa
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {sensors.map((sensor, index) => {
            return (
              <TableRow key={`sensor-${sensor.sensor}-index`}>
                <TableCell>{sensor.sensor}</TableCell>
                <TableCell align="center">
                  <Link to={'Mapa'} state={{ observations: sensor.observations }}>
                    Mostrar no mapa
                  </Link>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
