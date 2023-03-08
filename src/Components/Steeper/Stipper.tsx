import FinalStep from '../Steps/FinalStep'
import FirstStep from '../Steps/FirstStep'
import ForthStep from '../Steps/ForthStep'
import SecondStep from '../Steps/SecondStep'
import ThirdStep from '../Steps/ThirdStep'
import MultiStepForm, { FormStep } from './MultiStepForm'

function Stipper() {
  return (
    <div>
      <MultiStepForm 
          initialValues={{}}
          onSubmit = { values => {
            alert(JSON.stringify(values,null,2))
          }}
      >
        
        <FormStep stepName="Step 1">
          <FirstStep />
        </FormStep>
        <FormStep stepName="Step 2">
          <SecondStep />
        </FormStep>
        <FormStep stepName="Step 3">
          <ThirdStep />
        </FormStep>
        <FormStep stepName="Step 4">
          <ForthStep />
        </FormStep>
      </MultiStepForm>
    </div>
  )
}

export default Stipper