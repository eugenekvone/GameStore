import React from 'react'
import styles from './Dots.module.scss'
import cn from 'classnames'

export type DotsPropsType = {
    totalProductsCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (p: number) => void
}

const Dots: React.FC<DotsPropsType> = ({totalProductsCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalProductsCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className={styles.dots}>
        {pages.map((p) => {
            return (
                <div className={cn({[styles.selectedPage]: currentPage === p}, styles.pageDots)}
                     key={p}
                     onClick={(e) => {
                         onPageChanged(p)
                     }}></div>
            )
        })}
    </div>
}

export default Dots