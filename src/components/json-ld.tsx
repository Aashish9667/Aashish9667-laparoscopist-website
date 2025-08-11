import * as React from 'react'
import type { WithContext, Thing } from 'schema-dts'
import serialize from 'serialize-javascript'

export type JsonLdProps<T extends Thing = Thing> = {
  data: WithContext<T>
}

export default async function JsonLd<T extends Thing = Thing>({ data }: JsonLdProps<T>) {
  return (
    <script
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: serialize(data, { isJSON: true }) }}
      type="application/ld+json"
    />
  )
}
