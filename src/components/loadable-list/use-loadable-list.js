// @flow

import { useState } from 'react'

import { useLoading } from '../loading'

type Provider = { fetch: () => Promise }

export default function useLoadableList(provider: Provider) {
  const [isLoading, load, complete] = useLoading()
  const [currentPage, setCurrentPage] = useState(0)
  const [errorMessage, setErrorMessage] = useState(null)
  const [list, setList] = useState([])
  const [metadata, setMetadata] = useState({})

  const saveData = data => setList(oldData => [...oldData, ...data])

  const fetchData = async () => {
    try {
      if (!isLoading) {
        load()
      }

      const data = await provider.fetch(currentPage + 1)
      saveData(data.data)
      setMetadata(data.metadata)
      setErrorMessage(null)
      setCurrentPage(currentPage + 1)
      complete()
    } catch (exception) {
      setErrorMessage(exception.message)
      complete()
    }
  }

  return [
    { isLoading, errorMessage, data: { data: list, metadata } },
    fetchData,
  ]
}
