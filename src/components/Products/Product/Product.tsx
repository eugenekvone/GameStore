import React from 'react'
import classes from './Product.module.scss'
import cn from 'classnames'
import {
    discountBtn,
    productPrice,
    productStartingPrice,
    ProductsStateType
} from '../../../redux/reducers/products-reducer'
import Rating from '../../Commons/Rating/Rating'
import Views from '../../Commons/Views/Views'
import {ItemType} from '../../../redux/reducers/item-reducer'

type PropsType = {
    product: ItemType,
}

export type ProductPropsType = {
    btn__basket_icon: string,
    recommended?: boolean,
    popular?: boolean
}

const Product: React.FC<ProductPropsType & PropsType> = ({product, btn__basket_icon, recommended, popular}) => {

    return (
        <div className={classes.product}>
            <img src={product.img} alt="product__img" className={classes.img}/>
            <div className={classes.logo}>
                <div className={classes.logo_icon_wrap}>
                    <img src={product.logo_icon} alt="logo_icon" className={classes.logo_icon}/>
                </div>
                <p className={classes.logo_text}>{product.logo_text}</p>
            </div>
            {recommended &&
			<div className={classes.rating_wrap}>
				<Rating rating={product.rating} itemId={product.id}/>
			</div>}
            <p className={classes.text}>{product.title}</p>
            {popular &&
			<div className={classes.views_wrap}>
				<Views views={product.views}/>
			</div>}
            <div className={cn('btn_1', classes.btn, discountBtn(product.discount))}>
                <div className={cn(classes.btn__price, 'btn_1__inner btn_1__price')}>
                    <p className="btn_1__price_starting_text">{productStartingPrice(product.price, product.discount)}</p>
                    <p className="btn_1__price_text">{productPrice(product.price)}</p>
                </div>
                <div className={cn(classes.btn__action, 'btn_1__inner btn_1__action')}>
                    <p className="btn_1__action_text">Выгодно</p>
                </div>
                <div className={cn('btn_1__basket', classes.btn__basket)}>
                    <p className="btn_1__basket_text">В корзину</p>
                    <img src={btn__basket_icon} alt="btn_1__icon" className="btn_1__icon"/>
                </div>
            </div>
        </div>
    )
}

export default Product