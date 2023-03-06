import React from 'react'

import { BlogList } from '../Blog/BlogList'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'


export const Body = () => {
  return (
    <Box my={5}>
    <Typography variant='h6' fontWeight={700}>Recently Published</Typography>
    <BlogList />
    </Box>
      )
}
