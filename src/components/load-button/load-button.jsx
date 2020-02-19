// @flow

import React from 'react'
import type { Node } from 'react'

import Loading from '../loading/loading'

import styles from './load-button.module.scss'

type Props = {
  children: Node,
  isLoading: boolean,
  onClick: (event?: SyntheticEvent<HTMLButtonElement>) => void,
}

function LoadButton({ children, isLoading, onClick }: Props) {
  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.button}
        disabled={isLoading}
        onClick={onClick}
      >
        {children}
        <Loading isLoading />
      </button>
    </div>
  )
}

export default LoadButton
