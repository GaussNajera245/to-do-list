import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Grid, Divider, List, ListItem, IconButton} from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';



const useStyles = makeStyles({
    paper: {
        padding: '5px',
        textAlign: 'center',
        color: "#FF8FFF",
        maxHeight: "67vh", 
        overflow: 'auto'
    },
    margin: {
        margin: 1,
    },
});



function Card(props){

    const classes = useStyles();
    return(
        <Grid item={true} sm={props.size} xs={10}>
            <Paper className={classes.paper}  >
                <List>
                    <ListItem>
                        {props.listName} 
                        <IconButton aria-label="add" className={classes.margin}  onClick={ props.handleClick } >
                            <AddCircleOutlineIcon style={{fill: "#61dafb"}}/>
                        </IconButton>       
                    </ListItem>
                    <Divider light />
                </List>
                {props.children}
            </Paper>
        </Grid>
    );
}

export default Card; 