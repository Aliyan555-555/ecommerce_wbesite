"use client"
import SearchResult from '@/components/SearchResult'
import Sorter from '@/components/Sorter'
import { useRouter } from 'next/router'
import React from 'react'

const Search = (props) => {
  const query = props.searchParams.query
  return (
    <div className=' w-full flex flex-row h-screen'>
        <Sorter/>
        <SearchResult/>
    </div>
  )
}

export default Search
