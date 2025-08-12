import * as React from 'react';
import { LuScale } from 'react-icons/lu';
import classes from './Icon.module.css';

export default function Icon() {
  return (
    <div className={classes.logoWrap}>
      <div className={classes.iconWrap}>
        <LuScale className={classes.icon} />
      </div>
      <span className={classes.srOnly}>Logo</span>
    </div>
  );
}
