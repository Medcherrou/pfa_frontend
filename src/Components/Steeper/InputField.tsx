import { TextField } from "@mui/material"
import { useField } from "formik";


const InputField = (props:any) => {

    const [field,meta] = useField(props);

  return (
    <TextField label={props.label} {...field} {...props}
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error} 
    />
  )
}

export default InputField