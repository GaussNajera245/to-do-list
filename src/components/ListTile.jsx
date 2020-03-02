import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Divider, Checkbox,ListItem,ListItemIcon} from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles({
    margin: {
        margin: 1,
    },
});


function ListTile(props){
    
    const classes = useStyles();

    let checked= false;
    function underline(){
        checked = !checked
        console.log(checked);
        

    };

    const normalTile =(
        <div className="listTile">
                <ListItem button>
                    {props.title}
                <IconButton aria-label="deploy" className={classes.margin} onClick={()=> props.getName(props.title)}>
                    <ChevronRightIcon style={{fill: "#61dafb"}}/>
                </IconButton> 
                </ListItem>
                <Divider light />
        </div>
    );
    
    const checkboxTile =(
        <div className="optionTile" >
            <ListItem >
                <ListItemIcon>
                    <Checkbox edge="start" onChange={underline} />
                </ListItemIcon>
                    {props.title}
            </ListItem>
        </div>
    );

    return props.isCheckboxTile ? (checkboxTile) : (normalTile);

}

export default ListTile;