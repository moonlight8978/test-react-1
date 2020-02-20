// @flow

export type User = {
  username: string,
  id: number,
  publicReposCount: number,
}

export const parseUser = (data: any) => ({
  username: data.login,
  id: data.id,
  publicReposCount: data.public_repos,
})
