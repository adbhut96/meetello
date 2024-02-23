import React, { useState } from 'react'
import Card from '../../../components/shared/Card/Card';
import { ArrowCircleRightOutlined, LockOutlined } from '@mui/icons-material';
import TextInput from '../../../components/shared/TextInput/TextInput';

import styles from './StepOTP.module.css';
import Button from '../../../components/shared/Button/Button';
import { verifyOtp } from '../../../http';
import {  useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../../../store/authSlice';


const StepOTP=({onNext}) => {

  
  const [otp , setOtp] = useState('');
  const {phoneNumber , email } = useSelector((state)=>state.auth.otp)
  const disaptch = useDispatch(); 
  const onSubmit = async()=>{
     
       try{
         const data =  await verifyOtp({
              otp , 
              phoneNumber:phoneNumber ,
              email:email});
              console.log(data);
              disaptch(setAuth(
                data
              ));
       }catch(e){
         console.log(e)  
      }
     

       //onNext(); 
  }


  return (
    <>
      <div className={styles.cardWrapper}>
      <Card 
      title="Enter the otp which we have sent to you !!"  
      icon={<LockOutlined/>}
      >
          <TextInput 
          value={otp}
          onChange={(e)=>setOtp(e.target.value)}
          />
      
                    <div className={styles.actionButtonWrapper}>

                    <Button title="Continue" icon={<ArrowCircleRightOutlined/>} 
                    onClick={onSubmit}
                    />
                    </div>

                <p className={styles.desclaimerParagraph}>By entering your phone number you are agreeing to our terms of service and Privacy Policy</p>


      </Card>

      </div>
    </>
  )
}

export default StepOTP;