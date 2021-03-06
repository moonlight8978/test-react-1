// @flow

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import type { Repo } from '../../domain/models/repo'
import { parseStargazers } from '../../domain/models/repo'
import Dropdown from '../dropdown/dropdown'
import Error from '../error'
import StargazerList from '../stargazer-list/stargazer-list'
import { useLoadableList } from '../loadable-list'
import { pagination } from '../../config'
import { StargazerApi } from '../../api/client'

import styles from './repo-item.module.scss'

type Props = {
  repo: Repo,
  index: number,
}

function RepoItem({ repo, index }: Props) {
  const [
    { data: stargazers, isLoading, errorMessage },
    { fetchData, fetchMore },
  ] = useLoadableList()

  const provider = {
    fetch: async () => {
      const repoStargazers = await StargazerApi.index(
        repo.owner.username,
        repo.name,
        1
      ).then(response => parseStargazers(response.data))
      return {
        data: repoStargazers,
        metadata: {
          total: repo.stargazersCount,
          fetched: repoStargazers.length,
        },
      }
    },
    fetchMore: async page => {
      const repoStargazers = await StargazerApi.index(
        repo.owner.username,
        repo.name,
        page
      ).then(response => parseStargazers(response.data))
      return {
        data: repoStargazers,
        metadata: {
          fetched: (page - 1) * pagination.PER_PAGE + repoStargazers.length,
        },
      }
    },
  }

  return (
    <div className={styles.container}>
      <div>
        <span>{`${index}. ${repo.name}`}</span>
      </div>
      <div>
        <Dropdown>
          <Dropdown.Button
            onOpen={() => {
              if (stargazers.data.length === 0) {
                fetchData(provider)
              }
            }}
          >
            {repo.stargazersCount}
            <FontAwesomeIcon icon="star" />
          </Dropdown.Button>

          <Dropdown.Content>
            {() => (
              <>
                {isLoading || <Error message={errorMessage} />}

                <StargazerList
                  isLoading={isLoading}
                  fetchMore={() => fetchMore(provider)}
                  stargazers={stargazers}
                />
              </>
            )}
          </Dropdown.Content>
        </Dropdown>
      </div>
    </div>
  )
}

export default RepoItem
