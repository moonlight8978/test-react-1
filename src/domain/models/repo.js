// @flow

export type Stargazer = {
  username: string,
  id: number,
}

export type Stargazers = Array<Stargazer>

export const parseStargazer = (stargazer: any) => ({
  username: stargazer.login,
  id: stargazer.id,
})

export const parseStargazers = (data: any, headers: any): Stargazers =>
  data.map(parseStargazer)

export type Repo = {|
  id: number,
  name: string,
  stargazersCount: number,
  fullName: string,
  owner: Stargazer,
|}

export type Repos = Array<Repo>

export const parseRepo = (repo: any) => ({
  id: repo.id,
  name: repo.name,
  stargazersCount: repo.stargazers_count,
  fullName: repo.full_name,
  owner: parseStargazer(repo.owner),
})

export const parseRepos = (data: any, headers: any): Repos =>
  data.map(parseRepo)
