// @flow

import React, { useState } from 'react'

import Container from './components/container'
import TextField from './components/text-field'
import RepoList from './components/repo-list'
import RepoItem from './components/repo-item'

const repos = {
  metadata: {
    total: 40,
    fetched: 30,
  },
  data: [
    { name: 'xyz', id: '123213', stargazersCount: 15 },
    { name: 'abc', id: '4543', stargazersCount: 15 },
  ],
}

function App() {
  const [username, setUsername] = useState('')
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
        renderRepo={(repo, index) => (
          <RepoItem repo={repo} key={repo.id} index={index} />
        )}
      />
    </Container>
  )
}

export default App
