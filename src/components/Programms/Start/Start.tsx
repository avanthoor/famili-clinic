import React from 'react';
import Header from "../../Header/Header";
import ProgrammInfo from "../ProgrammInfo/ProgrammInfo";
import classes from './Start.module.css'
import LocationItem from "./LocationItem/LocationItem";

function Start(props: any) {
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <Header/>
            </div>
            <div className={classes.programmInfo}>
                <ProgrammInfo/>
            </div>
        </div>
    );
}

export default Start;