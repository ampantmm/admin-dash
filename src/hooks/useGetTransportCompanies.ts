import { useQuery } from '@tanstack/react-query'
import { customFetch } from '../lib/customFetch'
import { TransportCompany } from '../lib/api.types'
import { useAuth } from '../components/auth/useAuth'

export const useGetTransportCompanies = () => {
  const { token } = useAuth()

  return useQuery({
    queryFn: () => customFetch<TransportCompany[]>('/transportCompanies', {}, token),

    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ['transportCompanies'],
  })
}
