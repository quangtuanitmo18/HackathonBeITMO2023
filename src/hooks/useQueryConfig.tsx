import { isArray, isEmpty } from 'lodash'
import isUndefined from 'lodash/isUndefined'
import omitBy from 'lodash/omitBy'
import { useRouter } from 'next/router'

const useQueryConfig = () => {
  const { query } = useRouter()
  const queryParams = query
  const categoryArray = query?.category ? (query.category as string).split(',') : []
  const rankArray = query?.rank ? (query.rank as string).split(',') : []
  const queryConfigCheckEmptyArr = omitBy(
    {
      id: query.id,
      category: categoryArray,
      rank: rankArray
    },
    (v: any) => isArray(v) && isEmpty(v)
  )
  const queryConfigQuery = omitBy(
    {
      ...queryConfigCheckEmptyArr
    },
    isUndefined
  )
  const queryConfigLink = omitBy(
    {
      id: query.id,
      category: query.category,
      rank: query.rank
    },
    isUndefined
  )

  return { queryConfigQuery, queryParams, queryConfigLink }
}

export default useQueryConfig
