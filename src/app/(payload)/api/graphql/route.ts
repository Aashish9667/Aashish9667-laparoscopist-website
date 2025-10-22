/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
// import config from '@payload-config';
// import { GRAPHQL_POST, REST_OPTIONS } from '@payloadcms/next/routes';

// export const POST = GRAPHQL_POST(config);

// export const OPTIONS = REST_OPTIONS(config);

import config from '@payload-config';
import { GRAPHQL_POST, REST_OPTIONS } from '@payloadcms/next/routes';
import { NextRequest } from 'next/server';

// Wrap POST to match Next.js RouteHandler
export const POST = async (req: NextRequest) => {
  // Payload's handler expects normal Request, so convert NextRequest
  const nodeReq = req as unknown as Request;
  const res = await GRAPHQL_POST(config)(nodeReq);
  return res;
};

// Wrap OPTIONS to match Next.js RouteHandler
export const OPTIONS = async (req: NextRequest) => {
  const nodeReq = req as unknown as Request;
  const res = await REST_OPTIONS(config)(nodeReq, { params: Promise.resolve({ slug: [] }) });
  return res;
};
