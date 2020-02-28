import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Hidden from '@material-ui/core/Hidden';
import Box from './Box'

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


const allToDos = [];
allToDos.push(<ListTileg title="hi"/>);


function Mcard() {
    const classes = useStyles();
    return (
        <div>
        
            <Grid className={classes.root}>
                <Grid  justify="center" container sm={12} spacing={3}>
                    <Box  listName="List:" size="4" />

                    <Box  size="6" />
        
        
        
        
        
        
        
        
                    {/* <Grid item sm={4}>
                        <Paper className={classes.paper} >
                            Lists:
                        <Divider light />
                             <List>
                                <ListItem button>
                                    jdialjdsia
                                </ListItem>
                                <Divider light />
                                <ListItem button>
                                    jdialjdsia
                                </ListItem>
                                <Divider light />
                            </List>
                        </Paper>
                    </Grid> */}
        
                    {/* <div className={classes.fakePad}></div> */}
                    {/* <Grid item sm={6}>
                        <Paper className={classes.paper}>
                            <List>
                                <ListItem button>
                                    click on me
                                </ListItem>
                            </List>
                        </Paper>
                    </Grid> */}
                </Grid>
            </Grid>
        </div>
    );
}




export default Mcard;  



