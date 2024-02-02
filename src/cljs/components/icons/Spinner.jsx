import React from 'react';

import styles from './Spinner.css';


export default function Icon({ }) {
  return (
    <div className="rounded-full mx-2 relative p-1 h-9 w-9 text-white flex items-center justify-center">
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect className={`${styles.spinner_7uc5} ${styles.spinner_ZAxd}`} x="1" y="6" width="2.8" height="12"/>
        <rect className={`${styles.spinner_7uc5} ${styles.spinner_RibN}`} x="5.8" y="6" width="2.8" height="12"/>
        <rect className={styles.spinner_7uc5} x="10.6" y="6" width="2.8" height="12"/>
        <rect className={`${styles.spinner_7uc5} ${styles.spinner_RibN}`} x="15.4" y="6" width="2.8" height="12"/>
        <rect className={`${styles.spinner_7uc5} ${styles.spinner_ZAxd}`} x="20.2" y="6" width="2.8" height="12"/>
     </svg>
    </div>
  )
}
