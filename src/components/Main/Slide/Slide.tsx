import React from 'react'
import classes from './Slide.module.scss'
import cn from 'classnames'
import {dateСonverter, productStartingPrice} from '../../../redux/reducers/products-reducer'
import Rating from '../../Commons/Rating/Rating'
import {SlideStateType} from '../../../redux/reducers/slide-reducer'

type PropsType = {
    slide: SlideStateType['discountSlide'],
    elements?: SlideStateType['elements'],
    recommended?: boolean,
    discount?: boolean,
    popular?: boolean,
    fresh?: boolean
}

const Slide: React.FC<PropsType> = ({slide, elements, recommended, discount, popular, fresh}) => {
    return (
        <div className={classes.slide}>
            <img src={slide.slide} alt="slide__img" className={classes.img}/>
            {discount &&
			<div className={classes.inner}>
				<p className={cn(classes.text, 'h2-2')}>Лучшая скидка</p>
				<div className={classes.discount}>
					<p className={cn(classes.price_old, 'text-16')}>{productStartingPrice(slide.price, slide.discount)}</p>
					<p className={cn(classes.price, 'text-15')}>{slide.price} Р</p>
				</div>
			</div>}
            {recommended &&
			<div className={classes.inner}>
				<p className={cn(classes.text, 'h2-2')}>Лучший рейтинг</p>
				<div className={classes.recommended}>
					<Rating rating={slide.rating} itemId={slide.id}/>
				</div>
			</div>}
            {popular &&
			<div className={classes.inner}>
				<p className={cn(classes.text, 'h2-2')}>Самая просматриваемая</p>
				<div className={classes.popular}>
                    {elements && <img src={elements.popular__img} alt="popular__img" className={classes.popular__img}/>}
					<p className={cn(classes.price, 'text-15')}>{slide.views}</p>
				</div>
			</div>}
            {fresh &&
			<div className={classes.inner}>
				<p className={cn(classes.text, 'h2-2')}>Дата выхода</p>
				<div className={classes.fresh}>
					<p className={cn(classes.date, 'text-15')}>{dateСonverter(slide.date)}</p>
				</div>
                {elements && <img src={elements.new__img} alt="new__img" className={classes.new__img}/>}
			</div>}
        </div>
    )
}

export default Slide