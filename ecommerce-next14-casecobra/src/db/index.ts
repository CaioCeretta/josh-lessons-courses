/* this db is going to be used for when we want to fetch any server side data */

import { PrismaClient } from '@prisma/client'

declare global {
  var cachedPrisma: PrismaClient
}

/* We overrided typescript global scope by adding a cachedPrisma, which is of type PrismaClient, here we are caching
the prisma client, and we must ensure that if we already created one database, we must not create a new one
*/

let prisma: PrismaClient

/* basically what we are saying that is that if we are in production, prisma is going to be equal a new prisma client
but if it's not in production and there is not a cachedPrisma, we will need to initialize a new client */

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient()
  }

  prisma = global.cachedPrisma
}

export const db = prisma

// We are never going to change this file again, it's the type of thing we worry once than leave it as it is
