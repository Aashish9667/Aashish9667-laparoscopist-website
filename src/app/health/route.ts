/* eslint-disable @typescript-eslint/no-unused-vars */
import configPromise from '@payload-config'
import { getPayload } from 'payload'

// eslint-disable-next-line import/prefer-default-export
export const GET = async (request: Request) => {
  const payload = await getPayload({
    config: configPromise,
  })

  return Response.json({
    message: 'ok',
  })
}
