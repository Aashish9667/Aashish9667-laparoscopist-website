import * as React from 'react';
import cssVariables from '@/lib/css-variables';
import oklchToHex from '@/lib/color-manipulation/oklch-to-hext';
import Header from '@/components/frontend/header';
import Footer from '@/components/frontend/footer';
import Providers from './providers';
import classes from './layout.module.css';

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="/favicon.ico" rel="icon" sizes="any" />
        <link href="/icon.svg" rel="icon" type="image/svg+xml" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="/site.webmanifest" rel="manifest" />
        <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
        <link
          color={oklchToHex(cssVariables.colors.primary)}
          href="/safari-pinned-tab.svg"
          rel="mask-icon"
        />
        <meta content={oklchToHex(cssVariables.colors.primary)} name="theme-color" />
      </head>
      <body>
        <Providers>
          <div className={classes.root}>
            <Header />
            <main className={classes.main}>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
