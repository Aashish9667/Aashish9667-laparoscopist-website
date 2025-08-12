'use client';

import * as React from 'react';
import { ProgressProvider } from '@bprogress/next/app';
import cssVariables from '@/lib/css-variables';
import oklchToHex from '@/lib/color-manipulation/oklch-to-hext';
import { QueryClientProvider } from '@/components/piplup-jsrepo/tanstack-query';

export type ProvidersProps = { children: React.ReactNode };

export default function Providers(props: ProvidersProps) {
  const { children } = props;
  return (
    <ProgressProvider
      color={oklchToHex(cssVariables.colors.primary)}
      height={`${cssVariables.bprogress.height || 4}px`}
      options={{ showSpinner: false }}
      shallowRouting
    >
      <QueryClientProvider>{children}</QueryClientProvider>
    </ProgressProvider>
  );
}
