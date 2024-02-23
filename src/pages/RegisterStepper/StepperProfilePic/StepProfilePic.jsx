import React, { useState } from 'react'
import Card from '../../../components/shared/Card/Card'
import { PictureInPicture } from '@mui/icons-material'
import Button from '../../../components/shared/Button/Button'
import { ArrowCircleRightOutlined } from '@mui/icons-material'
import styles from './StepProfilePic.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setAvatar } from '../../../store/activateSlice'
import { setAuth } from '../../../store/authSlice'


import { activate } from '../../../http'


function StepProfilePic({onClick}) {
  const dispatch = useDispatch();
 

   

  const [image,setImage]=useState('/image/avatar.png');

   
  const authData =useSelector((state)=> state.auth)
  const activateData = useSelector((state)=> state.activate)

  const onSubmit=async()=>{
      try{
          const data =await activate({
                  "id":authData.user.id,
                  "email":authData.user.email,
                  "phoneNumber":authData.user.phoneNumber,
                  "token":authData.user.token,
                  "username":activateData.name,
                  "imageData":activateData.avatar

          });
              
          console.log(data); 

          if(!data.activated){
              dispatch(setAuth(
                {
                  data :{
                    ...authData.user , 
                    activated:true
                  }
                }
              ));
          }

          // console.log(authData);
          // console.log(activateData);
          // console.log(data);
          
          
      }catch(e){
          console.log(e);
      }
  }

 const captureImage=(e)=>{
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.readAsDataURL(file);
  reader.onloadend = function(){
    setImage(reader.result);
    dispatch(setAvatar(reader.result));
  }


 }


  return (
    <>
    <Card title={`Hello  {username} !!!`} icon={<PictureInPicture />} >
    <p className={styles.subheading}>
      Is this avatar cool ?!!
    </p>
    
    <div className={styles.avatarWrapper}>
      <img className={styles.imageStyles} src={image} alt='avatar'  />
    </div>

    <div>
      <input
      onChange={captureImage}
      id="avatarInput"
      type="file"  className={styles.avatarInput}/>
      <label className={styles.avatarLabel} htmlFor="avatarInput">
        Choose a different Photo
      </label>
    </div>



<div className="actionButtonWrapper">

<Button title="Continue"
    icon={<ArrowCircleRightOutlined />}
    onClick={onSubmit}
    
/>

</div>


</Card>
    </>
  )
}

export default StepProfilePic