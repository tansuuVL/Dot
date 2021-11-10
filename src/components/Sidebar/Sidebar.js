import { Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: 300,
        padding: theme.spacing(3),
    },
}));

const Sidebar = () => {
    const classes = useStyles();

    return (
        <Grid item md={3}>
            <Paper className={classes.root}>Sidebar</Paper>
        </Grid>
    );
};

export default Sidebar;
