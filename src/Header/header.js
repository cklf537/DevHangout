import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './header.css'
import { Grid, Typography } from '@mui/material';
import Item from '@mui/material/Grid'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

theme.typography.h3 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '4.4rem',
    },
  };
  

export default function MainContainer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="false" className="mainContainer">
                <Grid container>
                    <Grid item xs={12}  >
                        <Box sx={{ bgcolor: '#cfe8fc', height: '50vh', padding: '15px' }}>
                        <ThemeProvider theme={theme}>
                        <Typography variant="h3"> CHANDRASHEKAR BOGGAVARPU</Typography>
                        <Typography variant='p'>Fullstack developer</Typography>
                        </ThemeProvider>
                        </Box>
                    </Grid>
                    <Grid item xs={12}  >
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={8}>
                                <Item></Item>
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <Item></Item>
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <Item></Item>
                            </Grid>
                            <Grid item xs={6} md={8}>
                                <Item></Item>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}
