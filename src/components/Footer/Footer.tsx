import React from 'react'
import classes from './Footer.module.scss'
import '../../All.css'
import icon_youtube from '../../img/footer__youtube.svg'
import {NavLink} from 'react-router-dom'
import footer__logo from '../../img/footer__logo.jpg'
import cn from 'classnames'
import footer__social_icon_1 from '../../img/footer__social_icon_1.svg'
import footer__social_icon_2 from '../../img/footer__social_icon_2.svg'
import footer__social_icon_3 from '../../img/footer__social_icon_3.svg'

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={cn('container', classes.inner)}>
                <div className={classes.block_1}>
                    <NavLink to="/" className={classes.footer__logo_wrap}>
                        <img src={footer__logo} alt="footer_logo"/>
                    </NavLink>
                    <a href="#" className={cn('text-1', classes.text_1)}>Гарантии</a>
                    <a href="#" className={cn('text-1', classes.text_1)}>Как купить?</a>
                    <a href="#" className={cn('text-1', classes.text_1)}>Поддержка</a>
                    <div className='flex-right flex'>
                        <a href="#" className={classes.social}>
                            <img src={footer__social_icon_1} alt="footer__social_icon_1"
                                 className={classes.social_icon}/>
                        </a>
                        <a href="#" className={classes.social}>
                            <img src={footer__social_icon_2} alt="footer__social_icon_2"
                                 className={classes.social_icon}/>
                        </a>
                        <a href="#" className={classes.social}>
                            <img src={footer__social_icon_3} alt="footer__social_icon_3"
                                 className={classes.social_icon}/>
                        </a>
                    </div>
                </div>
                <div className={classes.block_2}>
                    <a href="#" className={'text-1' + ' ' + classes.text_2}>Условия предоставления услуг</a>
                    <p className={'text-1' + ' ' + classes.text_2}>•</p>
                    <a href="#" className={'text-1' + ' ' + classes.text_2}>Политика конфиденциальности</a>
                    <p className={'text-1' + ' ' + classes.text_2}>•</p>
                    <a href="#" className={'text-1' + ' ' + classes.text_2}><span>Правила возврата магазина</span></a>
                    <a href="#" className="flex flex-ver-center flex-right">
                        <img src={icon_youtube} alt="youtube" className={classes.icon_youtube}/>
                        <p className="text-2">О нас на YouTube</p>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer