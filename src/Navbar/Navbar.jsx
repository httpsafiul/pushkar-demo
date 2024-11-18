import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';


const Navbar = () => {

    return (
        <AppBar position="static" sx={{ height: { xs: '4.3rem', }, width: "100%" }} >
            <Grid sx={{ width: "100%" }} container>
                <Grid item xs={9} sx={{ flexGrow: 1, display: { xs: 'flex', }, alignItems: 'center', textAlign: 'center', justifyContent: "flex-start" }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'sans-serif',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Navbar
                    </Typography>

                </Grid>
            </Grid>
        </AppBar>
    );
}

export default Navbar;