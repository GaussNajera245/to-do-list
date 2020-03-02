import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Divider,List, Hidden,Checkbox,ListItem,ListItemIcon} from '@material-ui/core';
import todos from './Todos'
import ListTile from './ListTile';
import Card from './Card'

class Box extends React.Component {

    constructor(props){
        super(props);
        let tiles = todos.map( 
                i => <ListTile title={i.title} key={i.title} id={i.title}  getName={this.getItemsFromList} />
        );
        this.addingListTiles = this.addingListTiles.bind(this);    
        this.addingChores = this.addingChores.bind(this);    
        this.state = {
            tiles: tiles,
            items: []
        };
    }
    
    addingListTiles(){
        const newValue = <ListTile title="hddi1" key="{K}" />
        this.setState({ 
            tiles: [...this.state.tiles, newValue]
        });
    }

    getItemsFromList = (itemName) => {
        let query = todos.find( e => e.title === itemName);
        this.setState({ 
            items: query.items
        });

        console.log(query)
    };

    addingChores(){
        console.log("Chores");
    };

    

    render(){
        let chores = (
            (this.state.items !== 0) && 
                this.state.items.map(
                    element => <ListTile title={element} isCheckboxTile='true' /> 
                )
        );

        return (
            <div>
                <Grid style={{minWidth: "400px"}}>
                    <Grid  justify="center" container  spacing={3}>
                        <Card  name="List:" size="4" handleClick={this.addingListTiles} >
                            <Divider light />
                            <List>
                                { this.state.tiles }
                            </List>
                        </Card>
                            
                        <Hidden xsDown>
                            <Card size="6" name="To do:" handleClick={this.addingChores}>
                            <Divider light />
                            <List>
                                {chores}  
                            </List>
                            </Card>
                        </Hidden>
                    </Grid>
                </Grid>
            </div>
        );
    }
}




export default Box;  



