// @flow

import axios from 'axios'

import { pagination } from '../config'

const client = axios.create({
  baseURL: 'https://api.github.com/',
})

const api = {
  show: (url: string): Promise<any> => client.get(url),
  index: (url: string, data: any = {}): Promise<any> => {
    const params = { ...data, per_page: pagination.PER_PAGE }
    return client.get(url, { params })
  },
}

export const RepoApi = {
  index: (username: string, page: number): Promise<any> =>
    api.index(`/users/${username}/repos`, {
      page,
    }),
}

export const UserApi = {
  show: (username: string): Promise<any> => api.show(`/users/${username}`),
}

export const StargazerApi = {
  index: (username: string, repo: string, page: number): Promise<any> =>
    api.index(`/repos/${username}/${repo}/stargazers`, {
      page,
    }),
}
