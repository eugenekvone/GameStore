import React from 'react'
import styles from './Rating.module.scss'
import cn from 'classnames'
import star from '../../../img/star.svg'
import star_active from '../../../img/star_active.svg'
import {ratingList} from '../../../redux/reducers/products-reducer'

type PropsType = {
    rating: number,
    itemId: number
}

const Rating: React.FC<PropsType> = ({rating, itemId}) => {

    const list = ratingList(rating)

    return (
        <div className={styles.rating}>
            {list.map(style => (
                <div className={cn('star', styles.star)}>
                    <img src={star} alt='star' className={cn('star', styles.icon)}/>
                    <div className={styles.icon_wrap_active} style={style}>
                        <img src={star_active} alt='star_active' className={cn('star_active', styles.icon_active)}/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Rating