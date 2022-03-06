import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Paper from "@material-ui/core/Paper";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Image from 'next/image'
import { Grid } from '@mui/material';
import crawlx from "/public/images/crawlx-service.jpg"

const servicesList=["Pest Control","Sanitization",
                    "House Cleaning", "Painting services",
                    "Tank Cleaning","Car Washing",
                    "Security Guard Services","House Keeping",
                  ]

const redirectToService=(data)=>{
                      alert(data)
                  
                    }                    

function OurSolution (){
    return (
      
        <Container maxWidth="lg">
          <Typography p={2}
              >
                Pest Control Services in Noida
            </Typography>
          <Grid container spacing={20}>
            <Grid item container alignItems="center" >
              {
                servicesList.map((serviceListitem,index)=>(
                  <Box p={2} 
                    key={index}
                    sx={{
                      width:"20vh",
                      //height:"20vh",
                      
                    }}
                   >
                    <Paper variant="elevation" elevation={5} >
                    <Card variant="outlined" onClick={redirectToService.bind(this, serviceListitem)}>
                      <CardMedia >
                        <Image alt="services" 
                              src={crawlx} 
                              width={100} 
                              height={100}
                              objectFit="contain"
                        />
                      </CardMedia>
                      <CardActions>
                          <Box p={1}>
                            <Button size="medium" color="primary">
                            <Typography>
                              {serviceListitem}
                            </Typography>
                              
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

export default  OurSolution;