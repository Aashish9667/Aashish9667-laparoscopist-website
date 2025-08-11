import * as React from 'react'
import { Scale } from 'lucide-react'
import classes from './Icon.module.css'

export default function Icon() {
  return (
    <div className={classes.logoWrap}>
      <div className={classes.iconWrap}>
        <Scale className={classes.icon} />
      </div>
      <span className={classes.srOnly}>
        Vivek Narayan Sharma - Advocate, Supreme Court of India
      </span>
    </div>
  )
}
