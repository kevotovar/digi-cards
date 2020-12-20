import axios, { AxiosResponse } from 'axios'

import { FILTERS } from '../endpoints'

export type FiltersResponse = {
  expansions: {
    id: number
    name: string
    code: string
  }
}

export function fetchFilters(): Promise<AxiosResponse<FiltersResponse>> {
  return axios.get<FiltersResponse>(FILTERS)
}
