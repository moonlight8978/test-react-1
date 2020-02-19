// @flow

import { useState } from 'react'

export default function useLoading() {
  const [isLoading, setIsLoading] = useState(true)

  const load = () => setIsLoading(true)
  const complete = () => setIsLoading(false)

  return [isLoading, load, complete]
}
