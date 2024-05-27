import { createRouteHandler } from 'uploadthing/next'

// Create route handler generates the necessary routes based on the outerFileRouter

import { ourFileRouter } from './core'

// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,

  // Apply an (optional) custom config:
  // config: { ... },
})
