import React from 'react'
import styles from './Preloader.module.scss'
import img from '../../../img/preloader.svg'

const Preloader = () => {
    return <div className={styles.preloader}>
        <img src={img} alt="preloader-img" className={styles.img}/>
    </div>
}

export default Preloader