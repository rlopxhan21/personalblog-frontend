import React, { useCallback } from 'react'
import axios from 'axios'

import {  ResultDataType } from '../Interface/Interface'

export const useGetDetailBlog = () => {
    const [blogData, setBlogData] = React.useState<ResultDataType>()
    const [isBlogLoading, setIsBlogLoading] = React.useState<boolean>(false)
    const [blogError, setBlogError] = React.useState<boolean>(false)

    const fetchBlogData = useCallback(async (postID: string | undefined) => {
        setIsBlogLoading(true)
        try {
            const response = await axios({
                method: "GET",
                url: process.env.REACT_APP_BASE_URL + `/post/${postID}`,
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