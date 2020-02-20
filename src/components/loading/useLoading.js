// @flow

import { useState } from 'react'

export default function useLoading(defaultLoading: boolean) {
  const [isLoading, setIsLoading] = useState(defaultLoading)

  const load = () => setIsLoading(true)
  const complete = () => setIsLoading(false)

  return [isLoading, load, complete]
}
