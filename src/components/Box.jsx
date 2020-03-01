import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Divider,List, Hidden,Checkbox,ListItem,ListItemIcon} from '@material-ui/core';
import todos from './Todos'
import ListTile from './ListTile';


// import Hidden from '@material-ui/core/Hidden';
import Card from './Card'

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


function Box() {

    const classes = useStyles();
    let J= [<ListTile title="hddi1" key="g" />, <ListTile title="hddi1" key="m" />];
    

    let K = Math.floor(Math.random() * 1000); ;
    let [tiles, addTiles] = React.useState(todos.map( i => <ListTile title={i.title} key="K" />));
   

    function addingListTiles(){
        const newValue = <ListTile title="hddi1" key={K} />
        addTiles( prevArray => [...prevArray, newValue]);
    };
     
       

    function addingChores(){
        console.log("Chores")
    };

    
    
    return (
        <div>
        
            <Grid className={classes.root}>
                <Grid  justify="center" container  spacing={3}>
                    <Card  listName="List:" size="4" handleClick={addingListTiles} >
                        <Divider light />
                        <List>
                            { tiles }
                        </List>
                    </Card>
                        
                    <Hidden xsDown>
                        <Card size="6" listName="To do:" handleClick={addingChores}>

                        <ListItem >
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                />
                            </ListItemIcon>
                           
                        </ListItem>
                        </Card>
                    </Hidden>
                </Grid>
            </Grid>
        </div>
    );
}




export default Box;  



