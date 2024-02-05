import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url'

export const client=createClient({
    projectId:'ycm3qstn',
    dataset:'production',
    apiVersion:'2023-10-17',
    useCdn:true,
  })
const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
