'use client'

import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { getAuthStatus } from './actions'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'

const Page = () => {
  const [configId, setConfigId] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const configurationId = localStorage.getItem('@casecobra/configurationId')

    if (configurationId) {
      setConfigId(configurationId)
    }
  }, [])

  const { data } = useQuery({
    queryKey: ['auth-callback'],
    queryFn: async () => await getAuthStatus(),
    retry: true,
    retryDelay: 500,
  })

  if (data?.success) {
    /* Here we will check if there was already a configuration and the user was prompted to log in */
    if (configId) {
      localStorage.removeItem('@casecobra/configurationId')
      router.push(`/configure/preview?id=${configId}`)
    } else {
      router.push('/')
    }
  }

  return (
    <div className="mt-24 flex w-full justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
        <h3 className="text-xl font-semibold">Logging you in...</h3>
        <p>You will be automatically redirected.</p>
      </div>
    </div>
  )
}

export default Page
