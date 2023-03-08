import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {Box,Button,Typography} from '@material-ui/core';
import '../Styles/Step.css';
import { FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from '@material-ui/core';
import InputField from '../Controls/TextField';

const validationSchema = yup.object({
    culture: yup
    .string('Saisir la culture')
    .required('Culture est requis'),
    distance_entre_lignes: yup
    .string('Saisir la distance entre lignes')
    .required('La distance entre lignes est requis'),
    distance_entre_plante: yup
    .string('Saisir la distance entre plante')
    .required('la distance entre plante est requis'),
    nbre_de_rempes_par_ligne: yup
    .string('Saisir la nbre de rempes par ligne')
    .required('Le nbre de rempes par ligne est requis'),
    arboriculture_culture: yup
    .string('Saisir l\'arboriculture culture')
    .required('l\'arboriculture culture est requis'),
    distance_entre_lignes_de_plantation: yup
    .string('Saisir la distance entre lignes de plantation')
    .required('La distance entre lignes de plantation est requis'),
    distance_entre_les_arabres: yup
    .string('Saisir la distance entre les arabres')
    .required('La distance entre les arabres est requis'),
    arboriculture_nbre_de_rempes_par_ligne: yup
    .number('Ce champ doit être un nombre')
    .required('La arboriculture nbre de rempes par ligne est requis'),
    nbre_de_goutteurs_par_arabre: yup
    .string('Saisir la nbre de goutteurs par arabre')
    .required('La nbre de goutteurs par arabre est requis'),
    
});

const SecondStep = () => {
  const formik = useFormik({
    initialValues: {
      maraichage: '',
      culture: '',
      distance_entre_lignes: '',
      distance_entre_plante: '',
      nbre_de_rempes_par_ligne: '',
      sens_de_plantation: '',
      arboriculture_culture: '',
      distance_entre_lignes_de_plantation: '',
      distance_entre_les_arabres: '',
      arboriculture_nbre_de_rempes_par_ligne: '',
      nbre_de_goutteurs_par_arabre: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });


  return (
    <Box className="container">
      <header>CULTURES :</header>  
      <form onSubmit={formik.handleSubmit} className="form-container">
        <FormControl component="fieldset">
            <Box display="flex" alignItems= "center">
                <Box mr={1}>
                    <Typography variant="subtitle1" gutterBottom>Maraîchage</Typography>
                </Box>
                <RadioGroup row aria-label="maraichage" name="maraichage"
                            value={formik.values.maraichage} onChange={formik.handleChange} >
                    <FormControlLabel value="plein_champs" control={<Radio />} label="Plein champs" />
                    <FormControlLabel value="sous_serre" control={<Radio />} label="Sous serre" />
                </RadioGroup>
            </Box>
        </FormControl>
        <Box >
            <InputField name="culture" label="Culture" className="input-field" />
            <InputField name="distance_entre_lignes" label="Distance entre lignes" className="input-field"  />
            <InputField name="distance_entre_lignes" label="Distance entre lignes" className="input-field" />
            <InputField name="distance_entre_plante" label="Distance entre plante" className="input-field" />
            <InputField name="nbre_de_rempes_par_ligne" label="Nbre de rempes par ligne" className="input-field" />
        </Box>
            <FormControl style={{width: '50%', marginBottom: '10px'}}>
                <InputLabel id="demo-simple-select-label">Sens de plantation</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="sens_de_plantation"
                    name="sens_de_plantation"
                    label="Sens de plantation"
                    value={formik.values.sens_de_plantation}
                    onChange={formik.handleChange}
                >
                    <MenuItem value="droit">La plantation en ligne droite</MenuItem>
                    <MenuItem value="quinconce">La plantation en quinconce</MenuItem>
                    <MenuItem value="cercle">La plantation en cercle</MenuItem>
                    <MenuItem value="carré">La plantation en carré</MenuItem>
                </Select>
            </FormControl>
        
        <Box>
            <Typography variant="subtitle1" gutterBottom>
            Arboriculture
            </Typography>
            <InputField name="arboriculture_culture" label="Culture" className="input-field" />
            <InputField name="distance_entre_lignes_de_plantation" label="Distance entre lignes de plantation" className="input-field" />
            <InputField name="distance_entre_les_arabres" label="Distance entre les arabres" className="input-field" />
            <InputField name="arboriculture_nbre_de_rempes_par_ligne" label="Nbre de rempes par ligne" className="input-field" />
            <InputField name="nbre_de_goutteurs_par_arabre" label="Nbre de goutteurs par arabre" className="input-field" />
        </Box>
      </form>
    </Box>
  );
};

export default SecondStep;