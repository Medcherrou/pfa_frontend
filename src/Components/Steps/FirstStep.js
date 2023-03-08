import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@material-ui/core/TextField';
import { MuiTelInput } from "mui-tel-input";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup,Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import '../Styles/Step.css';
import InputField from '../Controls/TextField';
import { MuiPickersUtilsProvider,KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const validationSchema = yup.object({
    domaine: yup
    .string('Saisir le domaine')
    .required('Domaine est requis'),
    situation_géographique: yup
    .string('Saisir la situation géographique')
    .required('Situation géographique est requis'),
    propriètaire: yup
    .string('Saisir le propriètaire')
    .required('Propriètaire est requis'),
    locataire: yup
    .string('Saisir le locataire')
    .required('Locataire est requis'),
    superficie_totel: yup
    .string('Saisir la superficie totel')
    .required('La superficie totel est requis'),
    superficie_à_équiper: yup
    .string('Saisir la superficie à équiper')
    .required('la superficie à équiper est requis'),
    commercial: yup
    .string('Saisir le commercial')
    .required('Le commercial est requis'),
    n_dossier: yup
    .string('Saisir le N° dossier')
    .required('Le N° dossier est requis'),
    n_télèphone: yup
    .string('Saisir le N° télèphone')
    .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, 'Le numéro de téléphone n\'est pas valide')
    .required('Le numéro de téléphone est requis'),
});

    

const FirstStep = () => {
  const formik = useFormik({
    initialValues: {
      domaine: '',
      situation_géographique: '',
      propriètaire: '',
      locataire: '',
      superficie_totel: '',
      superficie_à_équiper: '',
      commercial: '',
      n_dossier: '',
      n_télèphone: '',
      etude: '',
      installation_principele: '',
      installation_porte_rampe: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

    const [phone, setPhone] = useState('')

    const handleChange = (newPhone) => {
        setPhone(newPhone)
        }
    const [selectedDate, setSelectedDate] = useState(new Date());
        
    const handleDateChange = (date) => {
            setSelectedDate(date);
        };


  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Box className="container">
        <Box display="flex" justifyContent="flex-end">
            <KeyboardDatePicker
                autoOk
                variant="inline"
                inputVariant="outlined"
                label="Date"
                format="dd/MM/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                'aria-label': 'change date',
                }}
                TextFieldComponent={TextField}
            />
        </Box>
    <form onSubmit={formik.handleSubmit} className="form-container">
            <Box className="details">
                <Box Box display="flex" gap={2} flexWrap="wrap">
                    <InputField name="domaine" label="Domaine" className="input-field" />
                    <InputField name="situation_géographique" label="Situation géographique" className="input-field" />
                    <InputField name="propriètaire" label="Propriètaire" className="input-field" />
                    <InputField name="locataire" label="Locataire" className="input-field" />
                    <InputField name="superficie_totel" label="Superficie totel" className="input-field" />
                    <InputField name="superficie_à_équiper" label="Superficie à équiper" className="input-field" />
                    <InputField name="commercial" label="Commercial" className="input-field" />
                    <InputField name="n_dossier" label="N° dossier" className="input-field" />
                    <MuiTelInput defaultCountry={"MA"} name="" value={phone} onChange={handleChange} className="input-field" />
                </Box>
                <Box mt={2}>
                    <FormControl component="fieldset" className='etude-choix'>
                        <FormLabel component="legend">Choix de l'étude</FormLabel>
                        <RadioGroup row aria-label="etude" name="etude" value={formik.values.etude} onChange={formik.handleChange}>
                            <FormControlLabel value="brumisation" control={<Radio />} label="Brumisation" />
                            <FormControlLabel value="irrigation" control={<Radio />} label="Irrigation" />
                            <FormControlLabel value="traitement" control={<Radio />} label="Traitement" />
                        </RadioGroup>
                    </FormControl>
                </Box>
                <Box mt={2}>
                    <FormControl component="fieldset" className='etude-installation'>
                        <FormLabel component="legend" style={{marginBottom:"8px"}}>Choix Installation </FormLabel>
                        <Box display="flex" alignItems= "center">
                            <Box mr={1}>
                                    <Typography variant="subtitle1" gutterBottom>Principale</Typography>
                            </Box>
                            <RadioGroup aria-label="installation_principele" name="installation_principele" row
                                    value={formik.values.installation_principele} onChange={formik.handleChange} style={{marginBottom: '10px'}}>
                                <FormControlLabel value="PVC" control={<Radio />} label="PVC" />
                                <FormControlLabel value="PEHD" control={<Radio />} label="PEHD" />
                            </RadioGroup>
                        </Box>
                        <Box display="flex" alignItems= "center">
                            <Box mr={1}>
                                    <Typography variant="subtitle1" gutterBottom>Porte rampe</Typography>
                            </Box>
                            <RadioGroup aria-label="installation_porte_rampe" name="installation_porte_rampe" row
                                    value={formik.values.installation_porte_rampe} onChange={formik.handleChange}>
                            <FormControlLabel value="PVC" control={<Radio />} label="PVC" />
                            <FormControlLabel value="PEHD" control={<Radio />} label="PEHD" />
                            </RadioGroup>
                        </Box>
                    </FormControl>
                </Box>
            </Box>
       </form>
    </Box>
    </MuiPickersUtilsProvider>
  );
};
export default FirstStep;