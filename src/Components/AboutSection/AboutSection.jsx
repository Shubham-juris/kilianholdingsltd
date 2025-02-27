import { Box, Typography } from '@mui/material'
import React from 'react'
import AboutUs from '../../assets/About/AboutUs.webp'
const AboutSection = () => {
  return (
      <Box sx={{
        opacity:'0.4',
        overflow:'hidden',
        maxWidth:'1500px',
        backgroundColor:'#0C3F40',
        height:{xs:'1000px', sm:'1200px'},
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
      }}>
          <Typography sx={{
             overflow:'hidden',
              color:'#fff',
              fontSize:{xs:'1.5rem', sm:'2rem'},
              fontWeight:{xs:'400', sm:'700'},
              py:{xs:2, sm:3}
          }}>About Kilian Holdings Ltd.</Typography>
          <Box sx={{
            my:{xs:2, sm: 3},
            width:'80%',
            height:{xs:'300px', sm:'500px'},
            backgroundImage:`url(${AboutUs})`,
            backgroundSize:'cover',
          }}>
          </Box>
          <Typography sx={{
               overflow:'hidden',
              color:'#fff',
              fontSize:{xs:'1.5rem', sm:'2rem'},
              fontWeight:{xs:'400', sm:'700'},
              py:{xs:2, sm:3}
          }}>Our Mission</Typography>
          <Typography sx={{
             overflow:'hidden',
              color:'#fff',
              width:'80%',
              fontSize:{xs:'1.3rem', sm:'1.5rem'},
              fontWeight:{xs:'300', sm:'500'},
              py:{xs:2, sm:3}
          }}> At Kilian Holdings ,our mission is to provide exceptional paralegal services focused on meticulous documentation assistance. We are dedicated to supporting our clients with precision and expertise, ensuring their legal documentation needs are met with efficiency and reliability </Typography>
      </Box>
  )
}

export default AboutSection