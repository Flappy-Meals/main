import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';


export default function Footer() {
  return (
    <Container style={{backgroundColor:"white",boxShadow:"none",color:"#D91919"}}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
            <Box sx={{ ml: '-15px' }}>
                 <Typography  style={{fontFamily:"Jomhuria",fontSize:"50px"}}
          >
            Flappy Meals
            </Typography>
            </Box>
            <Typography variant="body2" fontWeight={600} gutterBottom>
              Newsletter
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Subscribe to our newsletter for weekly updates and promotions.
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap>
              <TextField
                id="outlined-basic"
                hiddenLabel
                size="small"
                variant="outlined"
                fullWidth
                aria-label="Enter your email address"
                placeholder="Your email address"
                inputProps={{
                  autoComplete: 'off',
                  'aria-label': 'Enter your email address',
                }}
              />
              <Button variant="contained" sx={{ flexShrink: 0 , color: 'white' , fontWeight:'bold', fontFamily: 'Josefin Sans', borderRadius: '20px',  backgroundColor:'#D91919' ,  '&:hover': { backgroundColor: '#A70D0D' }}}>
                Subscribe
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box 
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" style={{fontFamily:"Jomhuria",fontSize:"30px"}}>
            Product
          </Typography>
          <Link color="text.secondary" href="#" variant="body"  fontWeight="medium" gutterBottom style={{ fontFamily: 'Josefin Sans', fontSize: { xs: '1rem', md: '1.2rem' } }} sx={{ textDecoration: 'none', '&:hover': { color: '#BABABA' }}}>
            Features
          </Link>
          <Link color="text.secondary" href="#" variant="body"  fontWeight="medium" gutterBottom style={{ fontFamily: 'Josefin Sans', fontSize: { xs: '1rem', md: '1.2rem' } }} sx={{ textDecoration: 'none', '&:hover': { color: '#BABABA' }}}>
            Testimonials
          </Link>
          <Link color="text.secondary" href="#" variant="body"  fontWeight="medium" gutterBottom style={{ fontFamily: 'Josefin Sans', fontSize: { xs: '1rem', md: '1.2rem' } }} sx={{ textDecoration: 'none', '&:hover': { color: '#BABABA' }}}>
            Highlights
          </Link>
          <Link color="text.secondary" href="#" variant="body"  fontWeight="medium" gutterBottom style={{ fontFamily: 'Josefin Sans', fontSize: { xs: '1rem', md: '1.2rem' } }} sx={{ textDecoration: 'none', '&:hover': { color: '#BABABA' }}}>
            Pricing
          </Link>
          <Link color="text.secondary" href="#" variant="body"  fontWeight="medium" gutterBottom style={{ fontFamily: 'Josefin Sans', fontSize: { xs: '1rem', md: '1.2rem' } }} sx={{ textDecoration: 'none', '&:hover': { color: '#BABABA' }}}>
            FAQs
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" style={{fontFamily:"Jomhuria",fontSize:"30px"}}>
            Company
          </Typography>
          <Link color="text.secondary" href="#" variant="body"  fontWeight="medium" gutterBottom style={{ fontFamily: 'Josefin Sans', fontSize: { xs: '1rem', md: '1.2rem' } }} sx={{ textDecoration: 'none', '&:hover': { color: '#BABABA' }}}>
            About us
          </Link>
          <Link color="text.secondary" href="#" variant="body"  fontWeight="medium" gutterBottom style={{ fontFamily: 'Josefin Sans', fontSize: { xs: '1rem', md: '1.2rem' } }} sx={{ textDecoration: 'none', '&:hover': { color: '#BABABA' }}}>
            Careers
          </Link>
          <Link color="text.secondary" href="#" variant="body"  fontWeight="medium" gutterBottom style={{ fontFamily: 'Josefin Sans', fontSize: { xs: '1rem', md: '1.2rem' } }} sx={{ textDecoration: 'none', '&:hover': { color: '#BABABA' }}}>
            Press
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" style={{fontFamily:"Jomhuria",fontSize:"30px"}}>
            Legal
          </Typography>
          <Link color="text.secondary" href="#" variant="body"  fontWeight="medium" gutterBottom style={{ fontFamily: 'Josefin Sans', fontSize: { xs: '1rem', md: '1.2rem' } }} sx={{ textDecoration: 'none', '&:hover': { color: '#BABABA' }}}>
            Terms
          </Link>
          <Link color="text.secondary" href="#" variant="body"  fontWeight="medium" gutterBottom style={{ fontFamily: 'Josefin Sans', fontSize: { xs: '1rem', md: '1.2rem' } }} sx={{ textDecoration: 'none', '&:hover': { color: '#BABABA' }}}>
            Privacy
          </Link>
          <Link color="text.secondary" href="#" variant="body"  fontWeight="medium" gutterBottom style={{ fontFamily: 'Josefin Sans', fontSize: { xs: '1rem', md: '1.2rem' } }} sx={{ textDecoration: 'none', '&:hover': { color: '#BABABA' }}}>
            Contact
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 2 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Typography variant="body2" mt={1} style={{fontFamily:"Jomhuria",fontSize:"30px"}}>
          {'Copyright © Flappy '}
          {new Date().getFullYear()}
          </Typography>
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: 'text.secondary',
          }}
        >
          <IconButton
            color="inherit"
            aria-label="GitHub"
            sx={{ alignSelf: 'center' }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="X"
            sx={{ alignSelf: 'center' }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="
            inherit"
            aria-label="LinkedIn"
            sx={{ alignSelf: 'center' }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
