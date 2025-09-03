// eslint-disable-next-line import/prefer-default-export
export const ECOMMERCE_ENABLED =
  typeof process.env.NEXT_PUBLIC_ECOMMERCE_ENABLED === 'boolean'
    ? process.env.NEXT_PUBLIC_ECOMMERCE_ENABLED
    : process.env.NEXT_PUBLIC_ECOMMERCE_ENABLED === 'true';
