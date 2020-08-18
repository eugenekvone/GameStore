import React from 'react'
import classes from './Review.module.scss'
import cn from 'classnames'
import {UsersType} from '../../../redux/reducers/item-reducer'

type PropsType = {
    users: UsersType,
    comment: string,
    date: string,
    userId: number
}

const Review: React.FC<PropsType> = ({comment, date, userId, users}) => {
    return (
        <div className={classes.review}>
            <div className={classes.nav}>
                <div className={classes.avatar}>
                    <img className={classes.avatar__img} src={users[userId - 1].avatar} alt="avatar"/>
                </div>
                <p className={cn(classes.name, 'text-9')}>{users[userId - 1].name}</p>
                <p className={cn(classes.date, 'text-10')}>{date}</p>
            </div>
            <div className={classes.inner}>
                <p className="text-7">{comment}</p>
            </div>
        </div>
    )
}

export default Review