import React from 'react'
import classes from './Products.module.scss'
import cn from 'classnames'
import Product, {ProductPropsType} from './Product/Product'
import {NavLink} from 'react-router-dom'
import Dots, { DotsPropsType } from '../Commons/Dots/Dots'
import Preloader from '../Commons/Preloader/Preloader'
import { ProductsType } from '../../redux/reducers/products-reducer'

export type ProductsPropsType = {
    isFetching: boolean,
    title?: string,
    products: ProductsType
}

const Products: React.FC<ProductsPropsType & ProductPropsType & DotsPropsType> = ({
                                                              products,
                                                              btn__basket_icon,
                                                              currentPage,
                                                              onPageChanged,
                                                              totalProductsCount,
                                                              pageSize,
                                                              isFetching,
                                                              title,
                                                              recommended,
                                                              popular
                                                          }) => {
    return (
        <div className={classes.products}>
            <div className="h2-wrap">
                {title && <h2 className="h2-1">{title}</h2>}
                <div className="flex-right">
                    <Dots currentPage={currentPage} onPageChanged={onPageChanged}
                          totalProductsCount={totalProductsCount} pageSize={pageSize}/>
                </div>
            </div>
            <div className={cn('products__inner', classes.products__inner)}>
                {isFetching && <Preloader/>}
                {products.map(p =>
                    <NavLink to={'/item/' + p.id} key={p.id}>
                        <Product product={p} btn__basket_icon={btn__basket_icon} recommended={recommended}
                                 popular={popular}/>
                    </NavLink>)
                }
            </div>
        </div>
    )
}

export default Products