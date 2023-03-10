import { Field } from 'formik';
import { Box, Checkbox, Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import React from 'react';
  const CheckboxField = ({ name, label, ...rest }) => {
    const [showFileInput, setShowFileInput] = React.useState(false);
    return (
      <Field name={name}>
        {({ field, form: { setFieldValue } }) => (
          <Box display="flex" alignItems="center">
            <Typography variant="subtitle1" style={{display:"inline-block"}}>{label}</Typography>
            <Checkbox
              {...field}
              {...rest}
              checked={field.value}
              onChange={(event) => { 
                setShowFileInput(event.target.checked);
                setFieldValue(name, event.target.checked);
              }}
            />
            {showFileInput && (
              <TextField
                type="file"
                variant="outlined"
                margin="normal"
                fullWidth
                onChange={(event) => {
                  setFieldValue(`${name}-file`, event.target.files[0]);
                }}
              />
            )}
          </Box>
        )}
      </Field>
    );
  };
  export default CheckboxField;
