import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';

const steps = ['Currency', 'Balance', 'Finish   '];
const HorizontalLinearStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  // const [skipped, setSkipped] = React.useState(new Set<number>());

  return (
    <Box>
      <Stepper alternativeLabel>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if ((index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps} sx={{width:"150px", marginTop:'40px'}}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            {/* Remove the unnecessary button and onClick event */}
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* You can add any additional content or components here if needed */}
        </React.Fragment>
      )}
    </Box>
  );
}

export default HorizontalLinearStepper;
