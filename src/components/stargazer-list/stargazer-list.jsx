// @flow

import React from 'react'

import type { Stargazers } from '../../domain/models/repo'
import Loading from '../loading/loading'
import LoadButton from '../load-button/load-button'

import styles from './stargazer-list.module.scss'

type Props = {
  stargazers: Stargazers,
}

function StargazerList({ stargazers }: Props) {
  return (
    <div className={styles.container}>
      <h4 className={styles.header}>Stargazers</h4>

      <div className={styles.list}>
        {stargazers.data.map(user => (
          <div className={styles.item} key={user.id}>
            {user.username}
          </div>
        ))}
      </div>

      {stargazers.metadata.fetched < stargazers.metadata.total && (
        <LoadButton isLoading onClick={() => {}}>
          Load more stargazers
        </LoadButton>
      )}

      <Loading isLoading size="2x" />
    </div>
  )
}

export default StargazerList
