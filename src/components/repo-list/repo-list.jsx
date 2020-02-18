// @flow

import React from 'react'
import type { Node } from 'react'

import type { Repos, Repo } from '../../domain/models/repo'

import styles from './repo-list.module.scss'

type Props = {
  repos: Repos,
  renderRepo: (repo: Repo, index?: number) => Node,
}

function RepoList({ repos, renderRepo }: Props) {
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
        <div className={styles.load}>
          <button type="button">Load more</button>
        </div>
      )}
    </div>
  )
}

export default RepoList
