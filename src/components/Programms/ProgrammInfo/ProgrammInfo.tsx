import React, {useState} from 'react';
import classes from './ProgrammInfo.module.css'
import startPic from '../../../static/man.svg'
import LocationItem from "../Start/LocationItem/LocationItem";
import {CSSTransition} from "react-transition-group";
import './dropdown.css'

function ProgrammInfo(props: any) {
    const [isDropdown, setIsDropdown] = useState(false)

    const toggleDropdown = () => {
        setIsDropdown(isDropdown => !isDropdown)
    }

    return (
        <div className={classes.programmInfo}>
            <div className={classes.programmPhoto}>
                <img src={startPic} alt=""/>
            </div>
            <div className={classes.programmOverview}>
                <span className={classes.programm}>Программа</span>
                <h1>Старт</h1>
                <div className={classes.choosePlace}>
                    <h2>Место приема</h2>
                    <CSSTransition in={isDropdown} timeout={300} classNames="plus">
                        <div onClick={toggleDropdown} className={classes.plus}></div>
                    </CSSTransition>
                </div>
                <CSSTransition in={isDropdown} timeout={2000} classNames="dropdown" unmountOnExit>
                    <div className={classes.locationsDropdown}>
                        <LocationItem locationName='Можайск'/>
                        <LocationItem locationName='Руза'/>
                        <LocationItem locationName='Шаховская'/>
                        <LocationItem locationName='Лотошино'/>
                        <LocationItem locationName='Гагарин'/>
                        <LocationItem locationName='Волокамск'/>
                    </div>
                </CSSTransition>
                <div className={classes.line}></div>
                <div className={classes.programmAbout}>
                    <div className={classes.programmAboutItem}>
                        <h3>Кому подходит</h3>
                        <span><a href="">Взрослым и детям</a></span>
                    </div>
                    <div className={classes.programmAboutItem}>
                        <h3>Длительность</h3>
                        <div>2 дня</div>
                    </div>
                    <div className={classes.programmAboutItem}>
                        <h3>Результат</h3>
                        <span>Подробное медицинское заключение и рекомендации</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProgrammInfo;