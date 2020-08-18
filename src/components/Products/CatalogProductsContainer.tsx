import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import Products from './Products'
import {
    getCatalogCurrentPage,
    getCatalogIsFetching,
    getCatalogPageSize,
    getCatalogProducts, getCatalogProfile,
    getElements, getTotalCatalogProductsCount,
} from '../../redux/selectors/products-selectors'
import {saveCatalog} from '../../redux/reducers/products-reducer'
import {AppStateType} from '../../redux/redux-store'

const CatalogProductsContainer: React.FC<MapPropsType & DispatchPropsType> = (props) => {

    let refreshItem = () => {
        const {currentPage, pageSize, profile} = props
        props.getCatalogProducts(currentPage, pageSize, profile)
    }

    useEffect(() => {
        refreshItem()
    }, [])

    let onPageChanged = (pageNumber: number) => {
        const {pageSize, profile} = props
        props.getCatalogProducts(pageNumber, pageSize, profile)
    }

    return <Products products={props.products}
                     btn__basket_icon={props.elements.btn__basket_icon}
                     pageSize={props.pageSize}
                     currentPage={props.currentPage}
                     isFetching={props.isFetching}
                     onPageChanged={onPageChanged}
                     totalProductsCount={props.totalProductsCount}
                     popular={true}
                     recommended={true}/>
}

let mapStateToProps = (state: AppStateType) => {
    return {
        products: getCatalogProducts(state),
        elements: getElements(state),
        pageSize: getCatalogPageSize(state),
        isFetching: getCatalogIsFetching(state),
        currentPage: getCatalogCurrentPage(state),
        totalProductsCount: getTotalCatalogProductsCount(state),
        profile: getCatalogProfile(state),
    }
}

type MapPropsType = ReturnType<typeof mapStateToProps>

type DispatchPropsType = {
    getCatalogProducts: (currentPage: number, pageSize: number, profile: Array<string>) => void
}

export default compose(connect(mapStateToProps,
    {getCatalogProducts: saveCatalog}))(CatalogProductsContainer)