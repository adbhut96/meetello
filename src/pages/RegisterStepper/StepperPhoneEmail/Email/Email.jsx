import React, { useState } from 'react'

import styles from '../StepPhoneEmail.module.css';
import Card from '../../../../components/shared/Card/Card';
import Button from '../../../../components/shared/Button/Button';
import { ArrowCircleRightOutlined, EmailOutlined, LocalPhoneOutlined } from '@mui/icons-material';
import { colors } from '@mui/material';
import TextInput from '../../../../components/shared/TextInput/TextInput'
import { useDispatch } from 'react-redux';
import { setOtp } from '../../../../store/authSlice';
import { sendOTP } from '../../../../http';


const Email = ({onNext}) => {
  const [email,setEmail] = useState('')
  const dispatch = useDispatch();
  
  const onsubmit= async()=>{
   
    const {data}= await sendOTP({email:email})
      
       try{
           dispatch(setOtp(
            {
              phoneNumber:data.phoneNumber,
              hash:data.otp,
              email:data.email
            }
           ))
         onNext();
       }
       catch(err){
        console.log(err)
       }
    

  }




  return (
    <Card title="Please enter your Email" icon ={<EmailOutlined/>}>
      <TextInput value={email} onChange={(e)=> setEmail(e.target.value)} />
                <div>
                <div className={styles.actionButtonWrapper}>

                <Button title="Continue" icon={<ArrowCircleRightOutlined/>} 
                onClick = {onsubmit}

                />
                </div>

                <p className={styles.desclaimerParagraph}>By entering your phone number you are agreeing to our terms of service and Privacy Policy</p>

                </div>
    </Card>
  )
}

export default Email;