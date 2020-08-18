import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import Products from './Products'
import {
    getRecommendedCurrentPage,
    getRecommendedIsFetching,
    getRecommendedPageSize,
    getRecommendedProducts,
    getElements,
    getTotalRecommendedProductsCount,
} from '../../redux/selectors/products-selectors'
import {ProductsType, requestRecommendedProducts} from '../../redux/reducers/products-reducer'
import {AppStateType} from '../../redux/redux-store'

type PropsType = {
    recommended: ProductsType
}

const RecommendedProductsContainer: React.FC<MapPropsType & DispatchPropsType & PropsType> = (props) => {

    let refreshItem = () => {
        const {currentPage, pageSize} = props
        props.getRecommendedProducts(currentPage, pageSize)
    }

    useEffect(() => {
        refreshItem()
    }, [props.recommended])

    let onPageChanged = (pageNumber: number) => {
        props.getRecommendedProducts(pageNumber, props.pageSize)
    }

    return <Products products={props.products}
                     recommended={true}
                     btn__basket_icon={props.elements.btn__basket_icon}
                     pageSize={props.pageSize}
                     currentPage={props.currentPage}
                     isFetching={props.isFetching}
                     onPageChanged={onPageChanged}
                     totalProductsCount={props.totalProductsCount}
                     title={'Рекомендуемое'}/>
}

let mapStateToProps = (state: AppStateType) => {
    return {
        products: getRecommendedProducts(state),
        elements: getElements(state),
        pageSize: getRecommendedPageSize(state),
        isFetching: getRecommendedIsFetching(state),
        currentPage: getRecommendedCurrentPage(state),
        totalProductsCount: getTotalRecommendedProductsCount(state),
    }
}

type MapPropsType = ReturnType<typeof mapStateToProps>

type DispatchPropsType = {
    getRecommendedProducts: (currentPage: number, pageSize: number) => void
}

export default compose<React.FC>(connect(mapStateToProps,
    {requestRecommendedProducts, getRecommendedProducts: requestRecommendedProducts}))(RecommendedProductsContainer)