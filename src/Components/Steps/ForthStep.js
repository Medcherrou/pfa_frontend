import { FormControl, FormControlLabel, RadioGroup,Radio, Typography, TextField } from '@material-ui/core'
import * as yup from 'yup'
import { Formik, FormikProvider, useFormik } from 'formik';
import { Box, Stack } from '@mui/material';
import '../Styles/Step.css';

const validationSchema  = yup.object().shape({
    
});



export default function ForthStep() {

    const formik = useFormik({
        initialValues: {
            filtration: '',
            commande_des_vannes: '',
            fertigation: '',
            agitation_des_engrais: '',
            pompe_de_reprise: '',
            demarrage_pompe_de_reprise: '',
            pompe_de_remplissage: '',
            demarrage_pompe_de_remplissage: '',
            Observation: ''
        }
    })

    return (
    <Box className="container"> 
        <header>Filtration :</header>
        <FormikProvider value={Formik}>
            <form onSubmit={formik.handleSubmit} className="form-container">            
                <FormControl component="fieldset">
                    <Box display="flex" alignItems= "center" sx={{ ml: 6 , mt:1}}>
                        <RadioGroup row aria-label="filtration" name="filtration" value={formik.values.filtration} onChange={formik.handleChange}>
                            <FormControlLabel value="automatique" control={<Radio />} label="Automatique" />
                            <FormControlLabel value="manuelle" control={<Radio />} label="Manuelle" />
                            <FormControlLabel value="a_disques" control={<Radio />} label="A disques" />
                            <FormControlLabel value="a_tamis" control={<Radio />} label="A tamis" />
                            <FormControlLabel value="a_sable" control={<Radio />} label="A sable" />
                            <FormControlLabel value="existante" control={<Radio />} label="Existante" />
                        </RadioGroup>
                    </Box>
                    {formik.errors.filtration && formik.touched.filtration && 
                    <Typography color="error">{formik.errors.filtration}</Typography>}
                </FormControl>
            </form>
        </FormikProvider>
        <header>Commande des vannes :</header>
        <FormikProvider value={Formik}>
            <form onSubmit={formik.handleSubmit} className="form-container">            
            <FormControl component="fieldset">
                <Box display="flex" alignItems= "center" sx={{ ml: 6 , mt: 1}}>
                        <RadioGroup row aria-label="commande_des_vannes" name="commande_des_vannes" value={formik.values.commande_des_vannes} onChange={formik.handleChange}>
                        <FormControlLabel value="manuelle" control={<Radio />} label="Manuelle" />
                        <FormControlLabel value="hydraulique" control={<Radio />} label="Hydraulique" />
                        <FormControlLabel value="electrique" control={<Radio />} label="Électrique" />
                        <FormControlLabel value="existante" control={<Radio />} label="Existante" />
                    </RadioGroup>
                </Box>
              {formik.errors.commande_des_vannes && formik.touched.commande_des_vannes && 
              <Typography color="error">{formik.errors.commande_des_vannes}</Typography>}
            </FormControl>
            </form>
        </FormikProvider>
        <header>Fertigation :</header>
        <FormikProvider value={Formik}>
            <form onSubmit={formik.handleSubmit} className="form-container">            
            <FormControl component="fieldset">
                <Box display="flex" alignItems= "center" sx={{ ml: 6 , mt: 1}}>
                    <RadioGroup row aria-label="fertigation" name="fertigation" value={formik.values.fertigation} onChange={formik.handleChange}>
                        <Box>
                            <FormControlLabel value="Injecteur_venturi" control={<Radio />} label="Injecteur venturi" />
                            <FormControlLabel value="Kit_manuel" control={<Radio />} label="Manuelle" />
                            <FormControlLabel value="a_disques" control={<Radio />} label="Kit manuel" />
                        </Box>
                        <Box>
                            <FormControlLabel value="Kit_semi_automatique" control={<Radio />} label="Kit semi-automatique" />
                            <FormControlLabel value="Machine_de_fertigation" control={<Radio />} label="Machine de fertigation" />
                            <FormControlLabel value="Existant" control={<Radio />} label="Existant" />
                        </Box>
                    </RadioGroup>
                </Box>
              {formik.errors.fertigation && formik.touched.fertigation && 
              <Typography color="error">{formik.errors.fertigation}</Typography>}
            </FormControl>
            </form>
        </FormikProvider>
        <header>Nombre et volume des citernes :</header>
        <FormikProvider value={Formik}>
            <form onSubmit={formik.handleSubmit} className="form-container">            
            <FormControl component="fieldset">
                <Box display="flex" alignItems= "center" sx={{ ml: 6 , mt: 1}}>
                    <RadioGroup row aria-label="nombre_et_volume_des_citernes" name="nombre_et_volume_des_citernes" 
                                value={formik.values.nombre_et_volume_des_citernes} onChange={formik.handleChange}>
                        <FormControlLabel value="4600" control={<Radio />} label="4600" />
                        <FormControlLabel value="2000" control={<Radio />} label="2000" />
                        <FormControlLabel value="1000" control={<Radio />} label="1000" />
                        <FormControlLabel value="500" control={<Radio />} label="500" />
                        <FormControlLabel value="bac_de_melange" control={<Radio />} label="bac_de_melange" />
                        <FormControlLabel value="autres" control={<Radio />} label="Autres" />
                    </RadioGroup>
                </Box>
              {formik.errors.nombre_et_volume_des_citernes && formik.touched.nombre_et_volume_des_citernes && 
              <Typography color="error">{formik.errors.nombre_et_volume_des_citernes}</Typography>}
            </FormControl>
            </form>
        </FormikProvider>
        <header>Agitation des engrais :</header>
        <FormikProvider value={Formik}>
            <form onSubmit={formik.handleSubmit} className="form-container">            
            <FormControl component="fieldset">
                <Box display="flex" alignItems= "center" sx={{ ml: 6 , mt: 1}}>
                    <RadioGroup row aria-label="agitation_des_engrais" name="agitation_des_engrais" value={formik.values.agitation_des_engrais} onChange={formik.handleChange}>
                        <FormControlLabel value="1.5" control={<Radio />} label="1.5 CV" />
                        <FormControlLabel value="2" control={<Radio />} label="2 CV" />
                        <FormControlLabel value="3" control={<Radio />} label="3 CV" />
                        <FormControlLabel value="4" control={<Radio />} label="4 CV" />
                    </RadioGroup>
                </Box>
              {formik.errors.agitation_des_engrais && formik.touched.agitation_des_engrais && 
              <Typography color="error">{formik.errors.agitation_des_engrais}</Typography>}
            </FormControl>
            </form>
        </FormikProvider>
        <header>Pompe de reprise :</header>
        <FormikProvider value={Formik}>
            <form onSubmit={formik.handleSubmit} className="form-container">            
                <FormControl component="fieldset">
                    <Box display="flex" alignItems= "center" sx={{ ml: 6 , mt: 1}}>
                        <RadioGroup row aria-label="pompe_de_reprise" name="pompe_de_reprise" value={formik.values.pompe_de_reprise} onChange={formik.handleChange}>
                            <Box row >
                                <FormControlLabel value="electropompe" control={<Radio />} label="Électropompe" />
                                <FormControlLabel value="pompe_axe_horizontal" control={<Radio />} label="Pompe axe horizontal" />
                                <FormControlLabel value="monobloc" control={<Radio />} label="Monobloc" />
                            </Box>
                            <Box row >
                                <FormControlLabel value="accouplement" control={<Radio />} label="Accouplement" />
                                <FormControlLabel value="2900_tr/min" control={<Radio />} label="2900 tr/min" />
                                <FormControlLabel value="1500_tr/min" control={<Radio />} label="1500 tr/min" />
                                <FormControlLabel value="Existant" control={<Radio />} label="Existant" />
                            </Box>
                        </RadioGroup>
                    </Box>
                    {formik.errors.pompe_de_reprise && formik.touched.pompe_de_reprise && 
                    <Typography color="error">{formik.errors.pompe_de_reprise}</Typography>}
                </FormControl>
                <Box sx={{ ml: 3 , mt: 1}}>   
                    <Typography variant='h6'>Démarrage :</Typography>
                    <FormControl component="fieldset">
                    <Box display="flex" alignItems= "center" sx={{ ml: 6 , mt: 1}}>
                        <RadioGroup row aria-label="demarrage_pompe_de_reprise" name="demarrage_pompe_de_reprise" value={formik.values.demarrage_pompe_de_reprise} onChange={formik.handleChange}>
                            <Box row >
                                <FormControlLabel value="etoile_triangle" control={<Radio />} label="Etoile triangle" />
                                <FormControlLabel value="electronique_progressif" control={<Radio />} label="Électronique progressif" />
                                <FormControlLabel value="Variateur_de_vitesse" control={<Radio />} label="Variateur de vitesse" />
                            </Box>
                        </RadioGroup>
                    </Box>
                    {formik.errors.demarrage_pompe_de_reprise && formik.touched.demarrage_pompe_de_reprise && 
                    <Typography color="error">{formik.errors.demarrage_pompe_de_reprise}</Typography>}
                </FormControl>
                </Box>
            </form>
        </FormikProvider>
        <header>Pompe de remplissage :</header>
        <FormikProvider value={Formik}>
            <form onSubmit={formik.handleSubmit} className="form-container">            
            <FormControl component="fieldset">
                <Box display="flex" alignItems= "center" sx={{ ml: 6 , mt: 1}}>
                    <RadioGroup row aria-label="pompe_de_remplissage" name="pompe_de_remplissage" value={formik.values.pompe_de_reprise} onChange={formik.handleChange}>
                        <Box row >
                            <FormControlLabel value="pompe_immergée" control={<Radio />} label="Pompe immergée" />
                            <FormControlLabel value="pompe_axe_vertical" control={<Radio />} label="Pompe axe vertical" />
                        </Box>
                    </RadioGroup>
                </Box>
              {formik.errors.pompe_de_remplissage && formik.touched.pompe_de_remplissage && 
              <Typography color="error">{formik.errors.pompe_de_remplissage}</Typography>}
            </FormControl>
            <Box sx={{ ml: 3 , mt: 1}}>   
                    <Typography variant='h6'>Démarrage :</Typography>
                    <FormControl component="fieldset">
                    <Box display="flex" alignItems= "center" sx={{ ml: 6 , mt: 1}}>
                        <RadioGroup row aria-label="demarrage_pompe_de_remplissage" name="demarrage_pompe_de_remplissage" value={formik.values.demarrage_pompe_de_remplissage} onChange={formik.handleChange}>
                            <Box row >
                                <FormControlLabel value="etoile_triangle" control={<Radio />} label="Etoile triangle" />
                                <FormControlLabel value="electronique_progressif" control={<Radio />} label="Électronique progressif" />
                                <FormControlLabel value="variateur_de_vitesse" control={<Radio />} label="Variateur de vitesse" />
                                <FormControlLabel value="existant" control={<Radio />} label="Existant" />
                            </Box>
                        </RadioGroup>
                    </Box>
                    {formik.errors.demarrage_pompe_de_remplissage && formik.touched.demarrage_pompe_de_remplissage && 
                    <Typography color="error">{formik.errors.demarrage_pompe_de_remplissage}</Typography>}
                </FormControl>
                </Box>
            </form>
        </FormikProvider>
        <Box mt={1}>
            <header>Observation</header>
            <TextField label="Observation" name='Observation' variant="outlined" fullWidth multiline minRows={4} margin ="normal"/>
        </Box>
    </Box>
    );
}