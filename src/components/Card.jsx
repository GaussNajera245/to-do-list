import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
    root: {
        minWidth: "800px",
        flexGrow: 1,
    },
    fakePad:{
        width: "5px"
    },
    paper: {
        padding: '5px',
        textAlign: 'center',
        color: "#FF8FFF",
    }
});


function Mcard() {
    const classes = useStyles();
    return (
        <div>
        
            <Grid className={classes.root}>
                
                <Grid  justify="center" container xs={12} spacing={3}>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>xs=6</Paper>
                    </Grid>
                    <div className={classes.fakePad}></div>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>xs=6</Paper>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}




export default Mcard;  
