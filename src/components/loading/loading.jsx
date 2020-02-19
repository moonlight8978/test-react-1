// @flow

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  isLoading: boolean,
  size?: string,
}

export default function Loading({ isLoading, size }: Props) {
  if (isLoading) {
    return (
      <div style={{ textAlign: 'center' }}>
        <FontAwesomeIcon icon="spinner" spin size={size} />
      </div>
    )
  }

  return null
}

Loading.defaultProps = {
  size: 'sm',
}
