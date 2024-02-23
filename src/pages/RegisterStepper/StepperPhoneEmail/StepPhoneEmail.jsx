import React, { useState } from 'react'

import Phone from './Phone/Phone';
import Email from './Email/Email';

import styles from './StepPhoneEmail.module.css'
import {  EmailOutlined, PhoneAndroidOutlined } from '@mui/icons-material';


const authSwithcer = {
  'phone': Phone,
  'email': Email ,
} 

const StepPhoneEmail = ({onNext})=>{
  const [authswitch , setAuthSwitch] = useState('email');

  const Switch = authSwithcer[authswitch]; 

 

  return (
      <>
      
      <div className="cardWrapper">
         <div>
         <div className={styles.buttonWrapper}>
          <button className={
            `${styles.tabButtons} ${authswitch==='phone'? styles.active: ' '}`
          } onClick={()=>setAuthSwitch('phone')}> 
          <PhoneAndroidOutlined  fontSize='large' />
          </button>
      <button  className={`${styles.tabButtons} ${
        authswitch==='email'?styles.active :''
      }`} onClick={()=>setAuthSwitch('email')}>
        <EmailOutlined  fontSize='large'/>
      </button>
            </div>  
            <Switch onNext={onNext} />

         </div>
      </div>
      
      </>
  );

}

export default StepPhoneEmail