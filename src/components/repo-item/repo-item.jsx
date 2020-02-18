// @flow

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import type { Repo } from '../../domain/models/repo'

import styles from './repo-item.module.scss'

type Props = {
  repo: Repo,
  index: number,
}

function RepoItem({ repo, index }: Props) {
  return (
    <div className={styles.container}>
      <div>
        <span>{`${index}. ${repo.name}`}</span>
      </div>
      <div>
        <button type="button">
          {repo.stargazersCount}
          <FontAwesomeIcon icon="star" />
        </button>
      </div>
    </div>
  )
}

export default RepoItem
