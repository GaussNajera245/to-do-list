import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Divider, ListItem} from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles({
    margin: {
        margin: 1,
    },
});

function ListTile(props){

    const classes = useStyles();

    return(
        <div className="listTile">
            <ListItem button>
                {props.title}
            <IconButton aria-label="deploy" className={classes.margin} >
                <ChevronRightIcon style={{fill: "#61dafb"}}/>
            </IconButton> 
            </ListItem>
            <Divider light />
        </div>
    );
}

export default ListTile;