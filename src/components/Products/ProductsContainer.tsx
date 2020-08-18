import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import Products from './Products'
import {
    getCurrentPage,
    getElements, getIsFetching,
    getPageSize,
    getProducts,
    getTotalProductsCount
} from '../../redux/selectors/products-selectors'
import {requestProducts} from '../../redux/reducers/products-reducer'
import {AppStateType} from '../../redux/redux-store'

const ProductsContainer: React.FC<MapPropsType & DispatchPropsType> = (props) => {

    let refreshItem = () => {
        const {currentPage, pageSize} = props
        props.getProducts(currentPage, pageSize)
    }

    let onPageChanged = (pageNumber: number) => {
        props.getProducts(pageNumber, props.pageSize)
    }

    useEffect(() => {
        refreshItem()
    }, [])

    return <Products products={props.products}
                     btn__basket_icon={props.elements.btn__basket_icon}
                     totalProductsCount={props.totalProductsCount}
                     pageSize={props.pageSize}
                     currentPage={props.currentPage}
                     isFetching={props.isFetching}
                     onPageChanged={onPageChanged}
                     title={'Игроки советуют'}/>
}

let mapStateToProps = (state: AppStateType) => {
    return {
        products: getProducts(state),
        elements: getElements(state),
        pageSize: getPageSize(state),
        isFetching: getIsFetching(state),
        currentPage: getCurrentPage(state),
        totalProductsCount: getTotalProductsCount(state),
    }
}

type MapPropsType = ReturnType<typeof mapStateToProps>

type DispatchPropsType = {
    getProducts: (currentPage: number, pageSize: number) => void
}

export default compose(connect(mapStateToProps,
    {requestProducts, getProducts: requestProducts}))(ProductsContainer)