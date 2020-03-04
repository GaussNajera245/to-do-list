import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, List, Hidden, } from '@material-ui/core';
import todos from './Todos'
import ListTile from './ListTile';
import CardHeader from './CardHeader';
import MinBox from './Minbox'

const useStyles = () => ({
    paper: {
        padding: '5px',
        textAlign: 'center',
        color: "#FF8FFF",
        maxHeight: "69vh",
        overflow: 'auto'
    },
    margin: {
        margin: 1,
    },

});

class Box extends React.Component {

    constructor(props) {
        super(props);
        let tiles = todos.map(
            i => <ListTile title={i.title} key={i.title} id={i.title} getName={this.getItemsFromList} />
        );
        this.addingListTiles = this.addingListTiles.bind(this);
        this.addingChores = this.addingChores.bind(this);
        this.updateToDoInput = this.updateToDoInput.bind(this);
        this.updateListInput = this.updateListInput.bind(this);
        this.state = {
            tiles: tiles,
            items: [],
            inputList: "",
            inputDo: "",
            head:""
        };
    }
    

    addingListTiles() {
        const val= this.state.inputList;
        const newValue = <ListTile title={val} key={this.K} getName={(i)=>{this.setState({head:i,items:[]})}}/>
        const condition = val !== "" ;
        
        {condition && 
            this.setState({
                tiles: [...this.state.tiles, newValue],
                inputList: "",
            });
        }
        
    }


    addingChores() {
        const newVal = this.state.inputDo;
        const condition = newVal !== "" ;
        
        if(condition) {   
            this.setState({
                items: [...this.state.items, newVal],
                inputDo: "",
            });
        }
    };

    getItemsFromList = (itemName) => {
        let query = todos.find(e => e.title === itemName);
        this.setState({
            items: query.items,
            head: itemName,
        });
    };

    updateToDoInput(e){
        const val = e.target.value;
            this.setState({
                inputDo: val
            })
    }

    updateListInput(e){
        const val = e.target.value;
            this.setState({
                inputList: val
            })
    }

    K= ()=> Math.random() ;

    render() {
        const { classes } = this.props;
        let chores = (
            (this.state.items !== 0) &&
            this.state.items.map(
                element => <ListTile title={element} key={this.K} isCheckboxTile='true' />
            )
        );

        return (
            <div>
                <MinBox>
                    <Grid item={true} sm={4} xs={10}>
                        <Paper className={classes.paper}  >
                            <List>
                                <CardHeader  title="List:" inputVal={this.state.inputList} click={this.addingListTiles} change={this.updateListInput}/>
                                {this.state.tiles}
                            </List>
                        </Paper>
                    </Grid>

                <Hidden xsDown>
                    <Grid item={true} sm={6} xs={10}>
                        <Paper className={classes.paper} >
                            <List>
                                <CardHeader  title="To do:" inputVal={this.state.inputDo} click={this.addingChores} change={this.updateToDoInput}/>
                                {this.state.head}
                                {chores}
                            </List>
                        </Paper>
                    </Grid>
                </Hidden>
                </MinBox>
            </div>
        );
    }
}

export default withStyles(useStyles)(Box);



