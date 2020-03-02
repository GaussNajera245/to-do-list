import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Paper, Grid, Divider, List, ListItem, IconButton} from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

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

class Card extends React.Component{
    render(){
        const { classes } = this.props;
        return(
            <Grid item={true} sm={this.props.size} xs={10}>
            <Paper className={classes.paper}  >
                <List>
                    <ListItem>
                        {this.props.name} 
                        <IconButton aria-label="add" className={classes.margin}  onClick={ this.props.handleClick } >
                            <AddCircleOutlineIcon style={{fill: "#61dafb"}}/>
                        </IconButton>       
                    </ListItem>
                    <Divider light />
                </List>
                {this.props.children}
            </Paper>
        </Grid>
    );
    }
}

export default withStyles(useStyles)(Card);