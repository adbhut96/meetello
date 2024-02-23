import styles from './TextInput.module.css'

import React from 'react'

const TextInput = (props) => {
  return (
    <div>
        <input className={styles.input} type='text' {...props}/>
    </div>
  )
}

export default TextInput