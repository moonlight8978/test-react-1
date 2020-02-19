// @flow

export type Repo = {|
  id: number,
  name: string,
  stargazersCount: number,
|}

type ReposMetadata = {
  total: number,
  fetched: number,
}

export type Repos = {|
  data: Array<Repo>,
  metadata: ReposMetadata,
|}

export const parseRepo = (repo: any) => ({
  id: repo.id,
  name: repo.name,
  stargazersCount: repo.stargazers_count,
})

export const parseRepos = (data: any, headers: any): Repos => ({
  data: data.map(parseRepo),
  metadata: {
    total: 50,
    fetched: 30,
  },
})

export type Stargazer = {
  username: string,
  id: number,
}

export type Stargazers = {
  data: Array<Stargazer>,
  metadata: {
    total: number,
    fetched: number,
  },
}

export const parseStargazer = (stargazer: any) => ({
  username: stargazer.login,
  id: stargazer.id,
})

export const parseStargazers = (data: any, headers: any): Stargazers => ({
  data: data.map(parseStargazer),
  metadata: {
    total: 50,
    fetched: 30,
  },
})
