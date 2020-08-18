import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import Products from './Products'
import {
    getPopularCurrentPage,
    getPopularIsFetching,
    getPopularPageSize,
    getPopularProducts,
    getElements, getTotalPopularProductsCount,
} from '../../redux/selectors/products-selectors'
import {
    requestPopularProducts,
    ProductsType,
} from '../../redux/reducers/products-reducer'
import {AppStateType} from '../../redux/redux-store'

type PropsType = {
    popular: ProductsType
}

const PopularProductsContainer: React.FC<MapPropsType & DispatchPropsType & PropsType> = (props) => {

    let refreshItem = () => {
        const {currentPage, pageSize} = props
        props.getPopularProducts(currentPage, pageSize)
    }

    useEffect(() => {
        refreshItem()
    }, [props.popular])

    let onPageChanged = (pageNumber: number) => {
        const {pageSize} = props
        props.getPopularProducts(pageNumber, pageSize)
    }

    return <Products products={props.products}
                     popular={true}
                     btn__basket_icon={props.elements.btn__basket_icon}
                     pageSize={props.pageSize}
                     currentPage={props.currentPage}
                     isFetching={props.isFetching}
                     onPageChanged={onPageChanged}
                     totalProductsCount={props.totalProductsCount}
                     title={'Популярное'}/>
}

let mapStateToProps = (state: AppStateType) => {
    return {
        products: getPopularProducts(state),
        elements: getElements(state),
        pageSize: getPopularPageSize(state),
        isFetching: getPopularIsFetching(state),
        currentPage: getPopularCurrentPage(state),
        totalProductsCount: getTotalPopularProductsCount(state),
    }
}

type MapPropsType = ReturnType<typeof mapStateToProps>

type DispatchPropsType = {
    getPopularProducts: (currentPage: number, pageSize: number) => void
}

export default compose<React.FC>(connect(mapStateToProps,
    {requestPopularProducts, getPopularProducts: requestPopularProducts}))(PopularProductsContainer)