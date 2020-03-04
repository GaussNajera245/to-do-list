import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, List, Hidden, } from '@material-ui/core';
import todos from './Todos'
import ListTile from './ListTile';
import CardHeader from './CardHeader';
import MinBox from './Minbox'

const useStyles = makeStyles({
    paper: {
        padding: '5px',
        textAlign: 'center',
        color: "#f262f2",
        maxHeight: "69vh",
        overflow: 'auto'
    },
    margin: {
        margin: 1,
    },
});

function BoxFunction(){
    let tiles = todos.map(
        i => <ListTile title={i.title} key={i.title} id={i.title} getName={getItemsFromList} />
    );
    
    const [state, setState] = React.useState({
        tiles: tiles,
        items: [],
        inputList: "",
        inputDo: "",
        head:""
    });
    
    function addingListTiles() {
        const val= state.inputList;
        const condition = val !== "" ;
        const get = (i)=>{
            setState( prev => {
                return {
                    ...prev,
                    head:i,
                    items:[]
                }})}
                
        const newValue = <ListTile title={val} key={Math.random().toString()} getName={get}/>
        if(condition) {
            setState(
                prev => {
                    return { 
                        ...prev,
                        tiles: [...state.tiles, newValue],
                        inputList: "",
                    }
                });
        }
    }

    function addingChores() {
        const newVal = state.inputDo;
        const condition = newVal !== "" ;
        
        {condition &&   
            setState(
                prev => {
                    return { 
                        ...prev,
                        items: [...state.items, newVal],
                        inputDo: "",
                    }
                });
        }
    };

    function getItemsFromList(itemName) {
        let query = todos.find(e => e.title === itemName);
        setState(
            prev => {
                return {
                ...prev,
                items: query.items,
                head: itemName,
            }
        });
    };

    function updateToDoInput(e){
        const val = e.target.value;
            setState(
                prev => {
                    return {
                    ...prev,
                    inputDo: val
                }
            });
    }

    function updateListInput(e){
        const val = e.target.value;
        setState(
            prev => {
                return {
                ...prev,
                inputList: val
            }
        });
    }

    let chores = (
        (state.items !== 0) &&
        state.items.map(
            (element) => <ListTile title={element} key={element+Math.random().toString()} isCheckboxTile='true' />
        )
    );

    const classes = useStyles();
    return (
        <div>
            <MinBox>
                <Grid item={true} sm={4} xs={10}>
                    <Paper className={classes.paper}  >
                        <List>
                            <CardHeader  title="List:" inputVal={state.inputList} click={addingListTiles} change={updateListInput}/>
                            {state.tiles}
                        </List>
                    </Paper>
                </Grid>

            <Hidden xsDown>
                <Grid item={true} sm={6} xs={10}>
                    <Paper className={classes.paper} >
                        <List>
                            <CardHeader  title="To do:" inputVal={state.inputDo} click={addingChores} change={updateToDoInput}/>
                            {state.head}
                            {chores}
                        </List>
                    </Paper>
                </Grid>
            </Hidden>
            </MinBox>
        </div>
    );
}

export default (BoxFunction);



