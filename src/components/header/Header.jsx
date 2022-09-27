import { Api } from '@mui/icons-material';
import {
  AppBar,
  Button,
  Link,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';

const links = ['Products', 'Solutions', 'Pricing', 'Enterprise'];

const Header = () => {
  return (
    <AppBar sx={{ bgcolor: 'transparent', boxShadow: 0 }} position='sticky'>
      <Toolbar>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
          }}
        >
          <Api sx={{ color: 'black' }} />
          <Box>
            <Tabs component={Link} sx={{ textDecoration: 'none' }}>
              {links.map((link, index) => (
                <Tab
                  sx={{
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    ':hover': {
                      textDecoration: 'underline',
                      textUnderlineOffset: '5px',
                    },
                  }}
                  key={index}
                  label={link}
                />
              ))}
            </Tabs>
          </Box>
          <Box display='flex' marginLeft={'auto'}>
            <Button sx={{ mr: 2 }} variant='outlined'>
              Talk To Us
            </Button>
            <Button sx={{ ml: 2 }} variant='contained'>
              Try For Free
            </Button>
          </Box>
        </Box>
      </Toolbar>
      <Box width='100%' height='100vh'>
        <video
          width='100%'
          height='70%'
          autoPlay
          loop
          muted
          playsInline
          src='/video.mp4'
        ></video>
        <Box display='flex' width='100%'>
          <Typography
            margin='auto'
            variant='h4'
            color='black'
            textAlign='center'
          >
            Build Your Softwares Hassle Free And With Top Notch Quality
          </Typography>
        </Box>
        <Box
          width='100%'
          display='flex'
          justifyContent='center'
          margin='auto'
          marginTop={5}
        >
          <Button variant='outlined'>Sign up With Email</Button>
          <Button sx={{ ml: 4 }} variant='contained'>
            Sign up With Google
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
};
export default Header;
