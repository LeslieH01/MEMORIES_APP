
import React from 'react'
/** nous allons importer tous les composants de material ui que nous allons utilisés */
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.jpg';
import useStyles from './styles';

function App() {
    const classes = useStyles();
    return (
        /** pour tout contenir */
        <Container maxWidth="lg">
            <AppBar className={classes.AppBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">
                    Memories
                </Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;
