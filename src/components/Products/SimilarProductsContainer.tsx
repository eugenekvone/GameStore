import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import Products from './Products'
import {
    getSimilarCurrentPage,
    getElements,
    getSimilarIsFetching,
    getSimilarPageSize,
    getSimilarProducts,
    getTotalProductsTypeCount,
    getTotalSimilarProductsCount,
} from '../../redux/selectors/products-selectors'
import {
    requestSimilarProducts,
    requestTotalSimilarProductsCount,
} from '../../redux/reducers/products-reducer'
import {AppStateType} from '../../redux/redux-store'

type PropsType = {
    itemId: number,
    itemType: string
}

const SimilarProductsContainer: React.FC<MapPropsType & DispatchPropsType & PropsType> = (props) => {

    let refreshItem = () => {
        const {currentPage, pageSize, itemType, itemId, totalProductsTypeCount} = props
        props.getSimilarProducts(currentPage, pageSize, itemType, itemId)

        // @ts-ignore
        let value = totalProductsTypeCount[itemType]
        props.requestTotalSimilarProductsCount(value)
    }

    useEffect(() => {
        refreshItem()
    }, [props.itemId])

    let onPageChanged = (pageNumber: number) => {
        const {pageSize, itemType, itemId} = props
        props.getSimilarProducts(pageNumber, pageSize, itemType, itemId)
    }

    return <Products products={props.products}
                     btn__basket_icon={props.elements.btn__basket_icon}
                     pageSize={props.pageSize}
                     currentPage={props.currentPage}
                     isFetching={props.isFetching}
                     onPageChanged={onPageChanged}
                     totalProductsCount={props.totalProductsCount}
                     title={'Похожие товары'}/>
}

let mapStateToProps = (state: AppStateType) => {
    return {
        products: getSimilarProducts(state),
        elements: getElements(state),
        pageSize: getSimilarPageSize(state),
        isFetching: getSimilarIsFetching(state),
        totalProductsCount: getTotalSimilarProductsCount(state),
        currentPage: getSimilarCurrentPage(state),
        totalProductsTypeCount: getTotalProductsTypeCount(state),
    }
}

type MapPropsType = ReturnType<typeof mapStateToProps>

type DispatchPropsType = {
    getSimilarProducts: (
        currentPage: number,
        pageSize: number,
        itemType: string,
        itemId: number
    ) => void,
    requestTotalSimilarProductsCount: (value: number) => void
}

export default compose(connect(mapStateToProps,
    {
        requestSimilarProducts,
        requestTotalSimilarProductsCount,
        getSimilarProducts: requestSimilarProducts
    }))(SimilarProductsContainer)