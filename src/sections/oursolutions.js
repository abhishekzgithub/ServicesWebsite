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
import Link from 'next/link';


const servicesList=["Pest Control","Sanitization",
                    "House Cleaning", "Painting services",
                    "Tank Cleaning","Car Washing",
                    "Security Guard Services","House Keeping",
                    "Pest Control","Sanitization",
                    "House Cleaning", "Painting services",
                    "Tank Cleaning","Car Washing",
                    "Security Guard Services","House Keeping"
                  ]

const redirectToService=(data)=>{
                      console.log(data)
                      alert(data)
                  
                    }                    

function OurSolution (){
    const classes = useStyles();
    return (
      
        <Container maxWidth="md">
          <Typography p={2}
              >
                OUR SERVICES
            </Typography>
          <Grid container spacing={20}>
            <Grid item container alignItems="center" >
              {
                servicesList.map((serviceListitem,index)=>(
                  <Box p={2} key={index}
                  >
                    <Paper variant="elevation" elevation={5} >
                    <Card onClick={redirectToService.bind(this, serviceListitem)}>
                      <CardContent>
                        <Typography variant="h6">Card Image</Typography>
                      </CardContent>
                      <CardActions>
                        <Box p={1}>
                          <Button size="small" color="primary" onClick={redirectToService.bind(this, serviceListitem)}>
                            {serviceListitem}
                          </Button>
                        </Box>
                      </CardActions>
                    </Card>
                    </Paper>
                  </Box>
                ))
              }
            </Grid>  
          </Grid>
        </Container>
        // </Link>
          
    )
  };
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
export default  OurSolution;