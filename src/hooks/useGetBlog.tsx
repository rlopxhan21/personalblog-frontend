import React, { useCallback } from 'react'
import axios from 'axios'

import { BlogDataType } from '../Interface/Interface'

export const useGetBlog = () => {
    const [blogData, setBlogData] = React.useState<BlogDataType>()
    const [isBlogLoading, setIsBlogLoading] = React.useState<boolean>(false)
    const [blogError, setBlogError] = React.useState<boolean>(false)

    const fetchBlogData = useCallback(async () => {
        setIsBlogLoading(true)
        try {
            const response = await axios({
                method: "GET",
                url: process.env.REACT_APP_BASE_URL + '/post/',
                timeout: 5000,
                headers: {
                    Authorization: process.env.REACT_APP_API_KEY,
                }
            })

            setBlogData(response.data)
            setIsBlogLoading(false)
        }
        catch (error) {
            setBlogError(true)
            setIsBlogLoading(false)
        }
    }, [])

    return {blogData, isBlogLoading, blogError, fetchBlogData}
}