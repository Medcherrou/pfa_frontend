import { Button } from "@mui/material";
import { FormikValues } from "formik";

interface Props{
    hasPrevious?: boolean;
    onBackClick: (values: FormikValues) => void ;
    isLastStep?: boolean ;
}

const FormNavigation = (props: Props) => {
  return (
    <div
        style={{
            display: 'flex',
            marginTop: 50,
            justifyContent: 'space-between',
        }}
    >
        {props.hasPrevious &&(
            <Button variant="contained" type="button" 
                onClick={props.onBackClick} >
                Back
            </Button>
        )}

        <Button variant="contained" color="success" type="submit">
            {props.isLastStep ? 'Submit' : 'Next'}
        </Button>
    </div>
  )
}

export default FormNavigation