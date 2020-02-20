// @flow

import React from 'react'
import type { Node } from 'react'

import type { Repos, Repo } from '../../domain/models/repo'
import LoadButton from '../load-button/load-button'

import styles from './repo-list.module.scss'

type Props = {
  repos: {
    data: Repos,
    metadata: {
      total: number,
      fetched: number,
    },
  },
  isLoading: boolean,
  fetchMore: () => void,
  renderRepo: (repo: Repo, index?: number) => Node,
}

function RepoList({ repos, renderRepo, fetchMore, isLoading }: Props) {
  return (
    <div className={styles.container}>
      <h4 className={styles.header}>Repositories</h4>

      <small className={styles.count}>
        Current display &nbsp;
        {`${repos.metadata.fetched}/${repos.metadata.total}`}
      </small>

      <div className={styles.list}>
        {repos.data.map((repo, index) => renderRepo(repo, index + 1))}
      </div>

      {repos.metadata.fetched < repos.metadata.total && (
        <LoadButton isLoading={isLoading} onClick={fetchMore}>
          Load more
        </LoadButton>
      )}
    </div>
  )
}

export default RepoList
