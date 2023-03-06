import React from 'react'

import { Box, Skeleton } from '@mui/material'

export const SkeletonLineView = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  )
}
