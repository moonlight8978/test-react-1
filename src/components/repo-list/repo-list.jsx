// @flow

import React from 'react'
import type { Node } from 'react'

import type { Repos, Repo } from '../../domain/models/repo'
import Loading from '../loading/loading'
import LoadButton from '../load-button/load-button'

import styles from './repo-list.module.scss'

type Props = {
  repos: Repos,
  fetch: () => Promise,
  renderRepo: (repo: Repo, index?: number) => Node,
}

function RepoList({ repos, renderRepo, fetch }: Props) {
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
        <LoadButton isLoading onClick={fetch}>
          Load more
        </LoadButton>
      )}

      <Loading isLoading size="2x" />
    </div>
  )
}

export default RepoList
