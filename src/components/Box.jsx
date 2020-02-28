import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
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



function Box(props){

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

export default Box; 