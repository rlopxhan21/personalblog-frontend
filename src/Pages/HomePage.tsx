import React from 'react'

import { Intro } from '../Components/HomePage/Intro'
import { Body } from '../Components/HomePage/Body'

import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'

export const HomePage = () => {
  return (
    <Box>
      <Intro />
      <Divider />
      <Body />
    </Box>
  )
}
