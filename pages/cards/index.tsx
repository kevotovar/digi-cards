import { useQuery } from 'react-query'
import { AxiosResponse } from 'axios'

import { fetchCards } from '../../services/cards'
import { fetchFilters, FiltersResponse } from '../../services/filters'

export default function Cards() {
  const cardsData = useQuery('fetchCards', fetchCards)
  const filtersData = useQuery<AxiosResponse<FiltersResponse>>(
    ['fetchFilters'],
    fetchFilters
  )
  if (cardsData.isLoading || filtersData.isLoading) {
    return 'cargando'
  }
  return 'Hello world'
}
