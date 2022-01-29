import React from 'react';
import classes from './LocationItem.module.css'

function LocationItem(props: any) {
    return (
        <button className={classes.locationItem}>{props.locationName}</button>
    );
}

export default LocationItem;