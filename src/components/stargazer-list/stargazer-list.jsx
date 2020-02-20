// @flow

import React from 'react'

import type { Stargazers } from '../../domain/models/repo'
import LoadButton from '../load-button/load-button'

import styles from './stargazer-list.module.scss'

type Props = {
  stargazers: {
    data: Stargazers,
    metadata: {
      total: number,
      fetched: number,
    },
  },
  isLoading: boolean,
  fetchMore: () => any,
}

function StargazerList({ stargazers, isLoading, fetchMore }: Props) {
  return (
    <div className={styles.container}>
      <h4 className={styles.header}>Stargazers</h4>

      <div className={styles.list}>
        {stargazers.data.map((user, index) => (
          <div className={styles.item} key={user.id}>
            {`${index + 1}. ${user.username}`}
          </div>
        ))}
      </div>

      {stargazers.metadata.fetched < stargazers.metadata.total && (
        <LoadButton isLoading={isLoading} onClick={fetchMore}>
          Load more stargazers
        </LoadButton>
      )}
    </div>
  )
}

export default StargazerList
