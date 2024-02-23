import React, { useState } from 'react'
import Card from '../../../components/shared/Card/Card'
import { ArrowCircleRightOutlined, Man2Rounded } from '@mui/icons-material'
import Button from '../../../components/shared/Button/Button'
import TextInput from '../../../components/shared/TextInput/TextInput'
import {useDispatch, useSelector } from 'react-redux'
import { setName } from '../../../store/activateSlice'


function StepName({onClick}) {
  const {name} = useSelector((state)=> state.activate)
  const dispatch =useDispatch();
  
  const [username , setUsername] = useState(name);
  


  const onSubmit = ()=>{
    if(!username){
      return;
    }
    dispatch(setName(username));
    onClick();
  }
  return (
    <>
    <Card title="Please enter your username" icon={<Man2Rounded />} >

      <TextInput 
        value={username}
        onChange = {(e)=> setUsername(e.target.value)}
      />
      <p className='desclaimerParagraph'> We believe in uniqueness , this username will be visible to all the other who joined the specific room!!</p>

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

export default StepName