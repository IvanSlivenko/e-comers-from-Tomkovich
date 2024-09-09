import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/constans";
import { CustomeApyDate } from '../../custome_data/custome_ApyData.js'

import { buildUrl } from "../../utils/common";



export const apiSliceCustome = createApi({ 
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: CustomeApyDate }),
    tagTypes: ['Product'],
    endpoints: (builder)=>({
        getProductCustome: builder.query({
            query: ({ id })=> `/products/${id}`,
            providesTags: ['Product'],
        }),
        getProductsCustome: builder.query({
            query: (params)=> buildUrl('products', params),
            providesTags: ['ProductsCustome'],
        }),
    })
 })

 export const { useGetProductCustomeQuery, useGetProductsCustomeQuery  } = apiSliceCustome;
