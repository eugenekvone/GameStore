import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import Products from './Products'
import {
    getDiscountCurrentPage,
    getDiscountIsFetching,
    getDiscountPageSize,
    getDiscountProducts,
    getElements, getTotalDiscountProductsCount,
} from '../../redux/selectors/products-selectors'
import {
    ProductsType,
    requestDiscountProducts,
} from '../../redux/reducers/products-reducer'
import {AppStateType} from '../../redux/redux-store'

type PropsType = {
    discount: ProductsType
}

const DiscountProductsContainer: React.FC<MapPropsType & DispatchPropsType & PropsType> = (props) => {

    let refreshItem = () => {
        const {currentPage, pageSize} = props
        props.getDiscountProducts(currentPage, pageSize)
    }

    useEffect(() => {
        refreshItem()
    }, [props.discount])

    let onPageChanged = (pageNumber: number) => {
        const {pageSize} = props
        props.getDiscountProducts(pageNumber, pageSize)
    }

    return (
        <Products products={props.products}
                  btn__basket_icon={props.elements.btn__basket_icon}
                  pageSize={props.pageSize}
                  currentPage={props.currentPage}
                  isFetching={props.isFetching}
                  onPageChanged={onPageChanged}
                  totalProductsCount={props.totalProductsCount}
                  title={'Скидки'}/>
    )
}

let mapStateToProps = (state: AppStateType) => {
    return {
        products: getDiscountProducts(state),
        elements: getElements(state),
        pageSize: getDiscountPageSize(state),
        isFetching: getDiscountIsFetching(state),
        currentPage: getDiscountCurrentPage(state),
        totalProductsCount: getTotalDiscountProductsCount(state),
    }
}

type MapPropsType = ReturnType<typeof mapStateToProps>

type DispatchPropsType = {
    getDiscountProducts: (currentPage: number, pageSize: number) => void
}

export default compose<React.FC>(connect(mapStateToProps,
    {requestDiscountProducts, getDiscountProducts: requestDiscountProducts}))(DiscountProductsContainer)