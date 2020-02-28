import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Divider,List,ListItem, Hidden} from '@material-ui/core';
import todos from './Todos'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';
import ListTileg from './ListTileg';


// import Hidden from '@material-ui/core/Hidden';
import Box from './Box'

const useStyles = makeStyles({
    root: {
        minWidth: "400px",
        flexGrow: 1,
    },
    fakePad:{
        width: "5px"
    },
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


function Mcard() {

    const classes = useStyles();
    let J= [<ListTileg title="hddi1" key="g" />, <ListTileg title="hddi1" key="m" />];
    

    let K = Math.floor(Math.random() * 1000); ;
    let [tiles, addTiles] = React.useState(todos.map( i => <ListTileg title={i.title} key="K" />));
   

    function addingListTiles(){
        const newValue = <ListTileg title="hddi1" key={K} />
        addTiles( prevArray => [...prevArray, newValue]);
    };
     
       

    function addingChores(){
        console.log("Chores")
    };

    
    
    return (
        <div>
        
            <Grid className={classes.root}>
                <Grid  justify="center" container  spacing={3}>
                    <Box  listName="List:" size="4" handleClick={addingListTiles} >
                        <Divider light />
                        <List>
                            { tiles }
                        </List>
                    </Box>
                        
                    <Hidden xsDown>
                        <Box size="6" listName="To do:" handleClick={addingChores}>
                        </Box>
                    </Hidden>
                </Grid>
            </Grid>
        </div>
    );
}




export default Mcard;  



