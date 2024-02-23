import React , {useState} from "react";
import StepPhoneEmail from "../RegisterStepper/StepperPhoneEmail/StepPhoneEmail";
import StepOTP from "../RegisterStepper/StepperOTP/StepOTP";


const stepper={
    1:StepPhoneEmail,
    2:StepOTP
}

const Authenticate =()=>{
    
    const [step,setStep] = useState(1);
    const Step = stepper[step];
    
    const onNextClick=()=>{
        if(step<2)
            setStep(step+1);
        else{
            console.log("page limit reached");
        }
    }
    
    return (
        <div>
      

        <Step  onNext={onNextClick}/>
          
      </div>
    )
}


export default Authenticate;