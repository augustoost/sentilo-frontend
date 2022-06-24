import React from 'react'

import { AppBar, Box, Toolbar, Typography, Container } from '@mui/material'
import { Link } from 'react-router-dom'

export const AppNavbar = () => {
  const linkStyle = {
    textDecoration: 'none',
    color: 'white'
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            Sentilo
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} gap={2}>
            <Link to={'/'} style={linkStyle}>
              Sensores
            </Link>
            <Link to={'/Mapa'} style={linkStyle}>
              Mapa
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
