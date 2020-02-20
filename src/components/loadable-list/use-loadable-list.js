// @flow

import { useState } from 'react'

import { useLoading } from '../loading'

type Provider<T> = {
  fetch: () => Promise<T>,
  fetchMore: (page: number) => Promise<T>,
}

type LoadResult = {|
  data: Array<any>,
  metadata: $Shape<{
    total: number,
    fetched: number,
  }>,
|}

export default function useLoadableList() {
  const [isLoading, load, complete] = useLoading(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [errorMessage, setErrorMessage] = useState(null)
  const [list, setList] = useState([])
  const [metadata, setMetadata] = useState({ total: 0, fetched: 0 })

  const saveData = data => setList(oldData => [...oldData, ...data])
  const saveMetadata = data =>
    setMetadata(oldMetadata => ({ ...oldMetadata, ...data }))

  const fetchData = async (provider: Provider<LoadResult>) => {
    try {
      if (!isLoading) {
        load()
      }

      const data = await provider.fetch()
      setList(data.data)
      saveMetadata(data.metadata)
      setErrorMessage(null)
      setCurrentPage(1)
      complete()
    } catch (exception) {
      setErrorMessage(exception.message)
      complete()
    }
  }

  const fetchMore = async (provider: Provider<LoadResult>) => {
    try {
      if (!isLoading) {
        load()
      }

      const data = await provider.fetchMore(currentPage + 1)
      saveData(data.data)
      saveMetadata(data.metadata)
      setErrorMessage(null)
      setCurrentPage(currentPage + 1)
      complete()
    } catch (exception) {
      setErrorMessage(exception.message)
      complete()
    }
  }

  return [
    {
      isLoading,
      errorMessage,
      data: { data: list, metadata },
    },
    { fetchData, fetchMore },
  ]
}
