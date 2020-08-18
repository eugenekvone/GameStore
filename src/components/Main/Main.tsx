import React from 'react'
import classes from './Main.module.scss'
import DiscountProductsContainer from '../Products/DiscountProductsContainer'
import PopularProductsContainer from '../Products/PopularProductsContainer'
import RecommendedProductsContainer from '../Products/RecommendedProductsContainer'
import OwlCarousel from 'react-owl-carousel'
import cn from 'classnames'
import DiscountSlideContainer from './Slide/DiscountSlideContainer'
import RecommendedSlideContainer from './Slide/RecommendedSlideContainer'
import PopularSlideContainer from './Slide/PopularSlideContainer'
import NewSlideContainer from './Slide/NewSlideContainer'

const Main = () => {
    return (
        <div className={classes.main}>
            <div className={cn('main__slider', classes.slider)}>
                <OwlCarousel items={1} margin={30} autoplay={true} loop={true}>
                    <div className={cn(classes.slide__item, 'item')}>
                        <DiscountSlideContainer/>
                    </div>
                    <div className={cn(classes.slide__item, 'item')}>
                        <NewSlideContainer/>
                    </div>
                    <div className={cn(classes.slide__item, 'item')}>
                        <RecommendedSlideContainer/>
                    </div>
                    <div className={cn(classes.slide__item, 'item')}>
                        <PopularSlideContainer/>
                    </div>
                </OwlCarousel>
            </div>
            <RecommendedProductsContainer/>
            <DiscountProductsContainer/>
            <PopularProductsContainer/>
        </div>
    )
}

export default Main