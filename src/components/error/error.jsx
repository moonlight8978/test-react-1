// @flow

import React, { useState } from 'react'

import styles from './error.module.scss'

type Props = {
  message: string,
}

export default function Error({ message }: Props) {
  const [isHidden, setIsHidden] = useState(false)
  const hide = () => setIsHidden(true)

  if (message && !isHidden) {
    return (
      <div className={styles.container}>
        <button className={styles.close} type="button" onClick={hide}>
          <span>×</span>
        </button>

        {message}
      </div>
    )
  }

  return null
}
