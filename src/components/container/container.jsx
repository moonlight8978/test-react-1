// @flow

import React from 'react'
import type { Node } from 'react'

import styles from './container.module.scss'

type Props = {
  children: Node,
}

export default function Container({ children }: Props) {
  return <div className={styles.container}>{children}</div>
}
