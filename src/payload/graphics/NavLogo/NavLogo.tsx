import * as React from 'react';
import Link from 'next/link';
import classes from './NavLogo.module.css';

export default function NavLogo() {
  return (
    <Link className={classes.root} href="/admin">
      Piplup
    </Link>
  );
}
