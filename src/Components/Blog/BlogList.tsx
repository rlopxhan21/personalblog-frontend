import React from 'react'

import { useGetBlog } from '../../hooks/useGetBlog'
import { CustomCard } from '../Layout/CustomCard'

import Stack from '@mui/material/Stack'
import Pagination from '@mui/material/Pagination'
import { SkeletonView } from '../Layout/SkeletonView'

export const BlogList = () => {

  const { blogData, isBlogLoading, blogError, fetchBlogData } = useGetBlog()
  
  React.useEffect(() => {
    fetchBlogData()
  }, [fetchBlogData])

  return (
    <Stack alignItems={"center"} my={2} gap={4}>
      <Stack direction={"row"} flexWrap='wrap' justifyContent={"center"} gap={4}>
        {blogData?.results.map(item => <CustomCard key={item.id} item={item} />)}
        {isBlogLoading && <SkeletonView />}
        {isBlogLoading && <SkeletonView />}
        {isBlogLoading && <SkeletonView />}
        {blogError && <div></div>}
    </Stack>
    <Pagination count={1} variant="outlined" shape="rounded"/>
    </Stack>
  )
}
