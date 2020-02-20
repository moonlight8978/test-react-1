// @flow

import React, { useState } from 'react'
import axios from 'axios'

import Container from '../components/container'
import TextField from '../components/text-field'
import RepoList from '../components/repo-list'
import RepoItem from '../components/repo-item'
import Form from '../components/form'
import Error from '../components/error'
import { useLoadableList } from '../components/loadable-list'
import { parseRepos } from '../domain/models/repo'
import { parseUser } from '../domain/models/user'

import styles from './home.module.scss'

function Home() {
  const [username, setUsername] = useState('')
  const [
    { data: repos, isLoading, errorMessage },
    { fetchData, fetchMore },
  ] = useLoadableList()

  const provider = {
    fetch: async () => {
      const [userRepos, user] = await Promise.all([
        axios
          .get(`https://api.github.com/users/${username}/repos`)
          .then(response => parseRepos(response.data)),
        axios
          .get(`https://api.github.com/users/${username}`)
          .then(response => parseUser(response.data)),
      ])
      return {
        data: userRepos,
        metadata: {
          total: user.publicReposCount,
          fetched: userRepos.length,
        },
      }
    },
    fetchMore: async page => {
      const userRepos = await axios
        .get(`https://api.github.com/users/${username}/repos?page=${page}`)
        .then(response => parseRepos(response.data))
      return {
        data: userRepos,
        metadata: {
          fetched: (page - 1) * 30 + userRepos.length,
        },
      }
    },
  }

  return (
    <Container>
      <h1>Simple app</h1>

      <Form onSubmit={event => fetchData(provider)} className={styles.form}>
        <TextField
          value={username}
          onChange={text => setUsername(text)}
          placeholder="Username"
        />

        <button type="submit" className={styles.submit}>
          Search
        </button>
      </Form>

      {isLoading || <Error message={errorMessage} />}

      <RepoList
        repos={repos}
        isLoading={isLoading}
        fetchMore={event => fetchMore(provider)}
        renderRepo={(repo, index) => (
          <RepoItem repo={repo} key={repo.id} index={index} />
        )}
      />
    </Container>
  )
}

export default Home
