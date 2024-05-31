'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

const client = new QueryClient()

const Providers = ({ children }: { children: ReactNode }) => {
  /* WHerever we wrap and use that QCP, on every place that we fetch something, let's say
  
  We fetch data from the /api/hello and we also fetch the same data in another place, because we used the QCP, and wrap our
  entire app with it, the results are going to be cached, so when we call it from anywhere else in the app, we can simply
  draw from the cache instead of making the same request with the same answer

  */
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

export default Providers
