// @flow

import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Container from '../components/container'
import TextField from '../components/text-field'
import RepoList from '../components/repo-list'
import RepoItem from '../components/repo-item'
import useLoadableList from '../components/loadable-list/use-loadable-list'
import { parseRepos } from '../domain/models/repo'

function Home() {
  const [username, setUsername] = useState('')
  const [{ data: repos, isLoading }, fetchData] = useLoadableList({
    fetch: () =>
      axios
        .get('https://api.github.com/users/facebook/repos')
        .then(response => parseRepos(response.data)),
  })

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Container>
      <h1>Simple app</h1>

      <TextField
        value={username}
        onChange={text => setUsername(text)}
        placeholder="Username"
      />

      <RepoList
        repos={repos}
        isLoading={isLoading}
        fetch={fetchData}
        renderRepo={(repo, index) => (
          <RepoItem repo={repo} key={repo.id} index={index} />
        )}
      />
    </Container>
  )
}

export default Home
