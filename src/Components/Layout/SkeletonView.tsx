import React from 'react'

import Skeleton from '@mui/material/Skeleton'

export const SkeletonView: React.FC = () => {
  return (
    <Skeleton
  sx={{ bgcolor: 'grey.900' }}
  variant="rectangular"
  width={300}
  height={425}
/>
  )
}