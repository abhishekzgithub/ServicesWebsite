import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Container from '@mui/material/Container';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images1 = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];


const images = [
  {
    imgPath: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    label: 'Breakfast',
  },
  {
    imgPath: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    label: 'Burger',
  },
  {
    imgPath: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    label: 'Camera',
  },
  {
    imgPath: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    label: 'Coffee',
  },
  {
    imgPath: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    label: 'Hats',
  },
  {
    imgPath: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    label: 'Honey',
  },
  {
    imgPath: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    label: 'Basketball',
  },
  {
    imgPath: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    label: 'Fern',
  },
  {
    imgPath: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    label: 'Mushrooms',
  },
  {
    imgPath: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    label: 'Tomato basil',
  },
  {
    imgPath: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    label: 'Sea star',
  },
  {
    imgPath: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    label: 'Bike',
  },
]
function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Container maxWidth="md">
    <Box
      sx={{ maxWidth: 1400, flexGrow: 1 }}
      >
      <Paper
        square
        elevation={1}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'black',//'background.default',
        }}
      >
        <Typography color='white'>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              
              <Box
                component="img"
                sx={{
                  height: 500,
                  display: 'block',
                  maxWidth: 1400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
              
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
    </Container>
  );
}

export default SwipeableTextMobileStepper;
