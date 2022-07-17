import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './header.css'
import { Grid } from '@mui/material';
import Item from '@mui/material/Grid'


export default function MainContainer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="false" className="mainContainer">
                <Grid container>
                    <Grid item xs={12}  >
                        <Box sx={{ bgcolor: '#cfe8fc', height: '50vh', padding: '15px' }}>Chandra</Box>
                    </Grid>
                    <Grid item xs={12}  >
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={8}>
                                <Item>xs=6 md=8</Item>
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <Item>xs=6 md=4</Item>
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <Item>xs=6 md=4</Item>
                            </Grid>
                            <Grid item xs={6} md={8}>
                                <Item>xs=6 md=8</Item>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}
