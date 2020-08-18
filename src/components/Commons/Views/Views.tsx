import React from 'react'
import styles from './Views.module.scss'
import icon from '../../../img/eye.svg'

type PropsType = {
    views: number
}

const Views: React.FC<PropsType> = ({views}) => {
    return (
        <div className={styles.views}>
            <img src={icon} alt="icon" className={styles.icon}/>
            <p className={styles.text}>{views}</p>
        </div>
    )
}

export default Views