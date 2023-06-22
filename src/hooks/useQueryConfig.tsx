import isUndefined from 'lodash/isUndefined'
import omitBy from 'lodash/omitBy'
import { useRouter } from 'next/router'

const useQueryConfig = () => {
  const { query } = useRouter()
  const queryParams = query
  const queryConfig = omitBy(
    {
      id: query.id
    },
    isUndefined
  )

  return { queryConfig, queryParams }
}

export default useQueryConfig
