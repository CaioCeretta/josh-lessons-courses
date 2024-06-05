'use client'

import { useQuery, useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { getAuthStatus } from "./actions"

const Page = () => {
  const [configId, setConfigId] = useState<string | null>(null)

  useEffect(() => {
    const configurationId = localStorage.getItem('@casecobra/configurationId')

    if(configurationId) {
      setConfigId(configurationId)
    }

  }, [])

  const {} = useQuery({
    queryKey: ['auth-callback'],
    queryFn: async () => await getAuthStatus()
  })

  return (
    
  )
}

export default Page
