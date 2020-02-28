import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles({
    paper: {
        padding: '5px',
        textAlign: 'center',
        color: "#FF8FFF",
        maxHeight: "67vh", 
        overflow: 'auto'
    }
});

function ListTileg(props){
    return(
        <div className="listTileg">
            <ListItem button>
                {props.title}
            </ListItem>
            <Divider light />
        </div>
    );
}


function Box(props){

    const classes = useStyles();
    return(
        <Grid item sm={props.size}>
            <Paper className={classes.paper}  >
                {props.listName}
                <Divider light />
                <List>
                    <ListTileg title="hi1"/>
                    <ListTileg title="hi1"/>
                    <ListTileg title="hi1"/>
                </List>
            </Paper>
        </Grid>
    );
}

export default Box; 