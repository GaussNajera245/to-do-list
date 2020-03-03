import React from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, ListItem, IconButton } from '@material-ui/core';



const useStyles = makeStyles({
    input: {
        backgroundColor: 'transparent',
        // //padding: 0.7rem;
        // width:'200px',
        borderBottom: 'solid 2px #ebebeb',
        marginLeft: '12px',
        border: 'solid 3px transparent',
        fontSize: '1rem',
        color: 'hsla(260, 2%, 25%, 0.7)',
    }
});


function CardHeader(props){

    const classes = useStyles();
    return(
        <div id="cardheader">
            <ListItem>
                {props.title} 
                <input type='text' id={props.title} className={classes.input} onChange={props.change} value={props.inputVal}></input>
                <IconButton aria-label="add" onClick={props.click} >
                    <AddCircleOutlineIcon style={{ fill: "#61dafb" }} />
                </IconButton>
            </ListItem>
            <Divider light /> <Divider light />
        </div>
    );
}

export default CardHeader