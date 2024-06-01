/* This is an async component because it runs on the server, and only the HTML is send back to the client */

import { db } from '@/db'
import { notFound } from 'next/navigation'
import DesignConfigurator from './DesignConfigurator'
interface PageProps {
  // The key will always be an array and the value can be each one of these, if its not passed, it's undefined
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

// In next js, a page automatically receives some properties, which are the searchParams,
const Page = async ({ searchParams }: PageProps) => {
  // make db call

  const { id } = searchParams

  if (!id || typeof id !== 'string') {
    return notFound()
  }

  const configuration = await db.configuration.findUnique({
    where: {
      id,
    },
  })

  if (!configuration) {
    return notFound()
  }

  const { imageUrl, width, height } = configuration

  return (
    <DesignConfigurator
      imageUrl={imageUrl}
      imageDimensions={{ width, height }}
      configId={configuration.id}
    />
  )
}

export default Page
