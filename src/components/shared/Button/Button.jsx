import React from 'react'


import styles from "./Button.module.css"


const Button=({title ,icon ,onClick}) => {
  return (
    <div >
        <button onClick={onClick} className={styles.button}>
           <span> {title}</span>
           <div className={styles.arrow}> 
           {icon}
           </div>
        </button>
    </div>
  )
}

export default Button