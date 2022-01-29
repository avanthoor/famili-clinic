import React from 'react';
import logo from '../../static/Logo.svg'
import classes from './Header.module.css'
import Button from "../Button/Button";

function Header(props: any) {
    return (
        <div className={classes.header}>
            <div className={classes.navBarFirstLvl}>
                <ul>
                    <li><a href="">Акции</a></li>
                    <li><a href="">Новости</a></li>
                    <li><a href="">МРТ</a></li>
                    <li><a className={classes.dentistry} href="">Стоматология</a></li>
                    <li><a href="">Поиск по сайту</a></li>
                    <li><a href="">+7 988 876 89 09</a></li>
                </ul>
            </div>
            <div className={classes.line}></div>
            <div className={classes.navBarSecondLvl}>
                <div><img src={logo} alt=""/></div>
                <ul>
                    <li><a href="">Программы</a></li>
                    <li><a href="">Услуги и цены</a></li>
                    <li><a href="">Врачи</a></li>
                    <li><a href="">Отзывы</a></li>
                    <li><a href="">Контакты</a></li>
                    <li><Button/></li>
                </ul>

            </div>

        </div>
    );
}

export default Header;