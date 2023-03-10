import { Box, Step, StepLabel, Stepper } from "@mui/material";
import { Form, Formik, FormikConfig, FormikHandlers, FormikHelpers, FormikValues } from "formik"
import React, { useState } from "react";
import FormNavigation from "./FormNavigation";

interface Props extends FormikConfig<FormikValues>{
    children: React.ReactNode ;
}

const MultiStepForm = ({children,initialValues,onSubmit}:Props) => {

    const [stepNumber, setStepNumber] = useState(0);
    const steps = React.Children.toArray(children) as React.ReactElement[] ;

    const step = steps[stepNumber] ;
    const totalSteps = steps.length ;
    const isLastStep = stepNumber === totalSteps - 1 ;

    const [snapshot, setSnapshot] = useState(initialValues);

    const next = (values: FormikValues) => {
        setSnapshot(values);
        setStepNumber(stepNumber + 1 )
    }

    const previous = (values: FormikValues) => {
        setSnapshot(values);
        setStepNumber(stepNumber - 1 )
    }

    const handleSubmit = 
    async (values: FormikValues,actions: FormikHelpers<FormikValues>) => {
         if(step.props.onSubmit){
            await step.props.onSubmit(values);
         }
         if(isLastStep){
            return onSubmit(values,actions);
         }else{
            actions.setTouched({});
            next(values);
         }
    };

  return (
    <div>
        <Formik 
            initialValues={snapshot} 
            onSubmit={handleSubmit} 
            validationSchema={step.props.validationSchema}
        >
            {(formik) => (
                <Form onSubmit={formik.handleSubmit} >
                    <Box  display="flex" justifyContent="center">
                        <Stepper activeStep={stepNumber} style={{width: '80%'}}>
                            {
                                steps.map(currentStep => {
                                    const label = currentStep.props.stepName ;
                                    return <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                })
                            }
                        </Stepper>
                    </Box>

                    {step}
                    
                    <FormNavigation isLastStep={isLastStep} 
                        hasPrevious={stepNumber > 0}  
                        onBackClick={() => previous(formik.values)}
                    />    
                </Form>
            )}
        </Formik>
    </div>
  )
}

export default MultiStepForm

export const FormStep = ({stepName = '', children}: any) => children ;