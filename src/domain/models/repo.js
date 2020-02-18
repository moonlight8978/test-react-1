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

export const parseRepos = (data: any, headers: any) => ({
  data: data.map(parseRepo),
  metadata: {
    total: 50,
    fetched: 30,
  },
})
