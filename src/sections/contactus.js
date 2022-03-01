import { Component } from "react";
// import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Paper from "@material-ui/core/Paper";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import { ClassNames } from "@emotion/react";
import { Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import Link from 'next/link';
import NextLink from 'next/link';



function ContactUs(){
  const classes = useStyles();
  return(
    <Container maxWidth="md">
      <Stack
        direction={{ xs: 'column', sm: 'column' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Box p={3}>
          <Typography>
            Contact Us
          </Typography>
          <Typography>
            Have a Pest Problem? Contact us right away!
          </Typography>
          <Typography>
            Customer satisfaction is our prime concern. Please contact us if you have queries.
          </Typography>
          <Typography>
            Address
          </Typography>
          <Typography>
            
            Plot No. 11, 3rd Floor DDA Community Center,
            Okhla Phase 1, Behind Hotel Crowne Plaza, New Delhi 110020.
          </Typography>
          <Typography>
            Email Id
          </Typography>
          <Typography>
            customercare@terminixsisindia.com
          </Typography>
          <Typography>
            Phone No
          </Typography>
          <Typography>
            1800-102-4949 ( 9 AM to 6 PM )
          </Typography>
          <Typography>
            If you are still not satisfied, please contact our top management at 
          </Typography>
          <Typography>
            countryhead@terminixsisindia.com
          </Typography>

        </Box>
        <Stack
        direction={{ xs: 'column', sm: 'column' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Box p={3}>
          <Box p={1}>
            <Typography p={1}>
              Book a Pest Control Service
            </Typography>
          </Box>
        <FormControl focused>
          <InputLabel htmlFor="my-input-name">Name</InputLabel>
          <Input id="my-input-name" aria-describedby="my-input-name" />
        </FormControl>
        <FormControl required>
          <InputLabel htmlFor="my-input-phone">Phone Number</InputLabel>
          <Input id="my-input-phone" aria-describedby="my-input-phone" />
          <FormHelperText id="my-input-phone">We'll never share your phone number.</FormHelperText>
          </FormControl>
        <FormControl required>
          <InputLabel htmlFor="my-input-email">Email address</InputLabel>
          <Input id="my-input-email" aria-describedby="my-input-email" />
          <FormHelperText id="my-input-email">We'll never share your email.</FormHelperText>
        </FormControl>
        
        </Box>
        <Button
          variant="contained"
          onClick={() => {
            alert('clicked');
          }}
          >
          <Typography p={1}>
            Submit
          </Typography>
        </Button>
        </Stack>
      </Stack>
      
    </Container>
  )
}

const useStyles = makeStyles({
  paper: {
    width: "50%",
    height: "50%",
    display:"flex",
    flexDirection:"row"
    
  },
  box:{
    // width: "10%",
    // height: "50%",
    // display:"grid",
    // justifyItems:"stretch",
  }
});

export default ContactUs;