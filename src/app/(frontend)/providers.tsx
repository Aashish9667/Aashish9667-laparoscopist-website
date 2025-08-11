'use client';

import * as React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { getQueryClient } from '@/lib/tanstack-query';
import { ProgressProvider } from '@bprogress/next/app';
import cssVariables from '@/lib/css-variables';
import oklchToHex from '@/lib/color-manipulation/oklch-to-hext';

export type ProvidersProps = { children: React.ReactNode };

export default function Providers(props: ProvidersProps) {
  const { children } = props;
  const queryClient = getQueryClient();
  return (
    <ProgressProvider
      color={oklchToHex(cssVariables.colors.primary)}
      height={`${cssVariables.bprogress.height || 4}px`}
      options={{ showSpinner: false }}
      shallowRouting
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ProgressProvider>
  );
}
