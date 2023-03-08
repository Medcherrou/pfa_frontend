import { Box, Checkbox, FormControlLabel, Stack, Typography } from '@mui/material'
import { useState } from 'react';
import UpLoader from '../UpLoader/UpLoader';

function  FinalStep() {

    const [showFields, setShowFields] = useState(false);

    function handleCheckboxChange(event) {
        setShowFields(event.target.checked);
    }

  return (
    
    <Box sx={{ mb: 2 }}>
            <FormControlLabel control={ <Checkbox checked={showFields} onChange={handleCheckboxChange}
                                inputProps={{ "aria-label": "show fields" }} /> }
            />
            <Typography variant="h5" sx={{ mb: 1 }}>
                CIN légalisée
            </Typography>
            {showFields && (
                <Stack direction="row" spacing={2}>
                    <UpLoader />
                </Stack>
            )}           
    </Box>
  )
}

export default FinalStep ;