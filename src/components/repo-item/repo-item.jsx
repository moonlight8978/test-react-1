// @flow

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import type { Repo } from '../../domain/models/repo'
import Dropdown from '../dropdown/dropdown'
import StargazerList from '../stargazer-list/stargazer-list'

import styles from './repo-item.module.scss'

type Props = {
  repo: Repo,
  index: number,
}

const stargazers = {
  data: [
    { id: 123213, username: 'asdfsadfadsf' },
    { id: 69324, username: 'oweurihrsdaf' },
  ],
  metadata: {
    fetched: 30,
    total: 60,
  },
}

function RepoItem({ repo, index }: Props) {
  return (
    <div className={styles.container}>
      <div>
        <span>{`${index}. ${repo.name}`}</span>
      </div>
      <div>
        <Dropdown>
          <Dropdown.Button>
            {repo.stargazersCount}
            <FontAwesomeIcon icon="star" />
          </Dropdown.Button>

          <Dropdown.Content>
            {() => <StargazerList stargazers={stargazers} />}
          </Dropdown.Content>
        </Dropdown>
      </div>
    </div>
  )
}

export default RepoItem
