import React from 'react';
import {Grid} from '@material-ui/core';

function MinBox(props){
    return(
        <Grid style={{ minWidth: "400px" }}>
            <Grid justify="center" container spacing={3} style={{ width:"100%" }} >
                {props.children}
            </Grid>
        </Grid>
    );
}

export default MinBox;