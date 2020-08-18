import {AppStateType} from '../redux-store'

export const getElements = (state: AppStateType) => {
    return state.products.elements
}

export const getProducts = (state: AppStateType) => {
    return state.products.products.items
}

export const getCurrentPage = (state: AppStateType) => {
    return state.products.products.currentPage
}

export const getPageSize = (state: AppStateType) => {
    return state.products.products.pageSize
}

export const getIsFetching = (state: AppStateType) => {
    return state.products.products.isFetching
}

export const getTotalProductsCount = (state: AppStateType) => {
    return state.products.products.totalProductsCount
}

export const getDiscountProducts = (state: AppStateType) => {
    return state.products.discountProducts.items
}

export const getDiscountCurrentPage = (state: AppStateType) => {
    return state.products.discountProducts.currentPage
}

export const getDiscountPageSize = (state: AppStateType) => {
    return state.products.discountProducts.pageSize
}

export const getDiscountIsFetching = (state: AppStateType) => {
    return state.products.discountProducts.isFetching
}

export const getTotalDiscountProductsCount = (state: AppStateType) => {
    return state.products.discountProducts.totalProductsCount
}


export const getPopularProducts = (state: AppStateType) => {
    return state.products.popularProducts.items
}

export const getPopularCurrentPage = (state: AppStateType) => {
    return state.products.popularProducts.currentPage
}

export const getPopularPageSize = (state: AppStateType) => {
    return state.products.popularProducts.pageSize
}

export const getPopularIsFetching = (state: AppStateType) => {
    return state.products.popularProducts.isFetching
}

export const getTotalPopularProductsCount = (state: AppStateType) => {
    return state.products.popularProducts.totalProductsCount
}

export const getRecommendedProducts = (state: AppStateType) => {
    return state.products.recommendedProducts.items
}

export const getRecommendedCurrentPage = (state: AppStateType) => {
    return state.products.recommendedProducts.currentPage
}

export const getRecommendedPageSize = (state: AppStateType) => {
    return state.products.recommendedProducts.pageSize
}

export const getRecommendedIsFetching = (state: AppStateType) => {
    return state.products.recommendedProducts.isFetching
}

export const getTotalRecommendedProductsCount = (state: AppStateType) => {
    return state.products.recommendedProducts.totalProductsCount
}

export const getSimilarProducts = (state: AppStateType) => {
    return state.products.similarProducts.items
}

export const getSimilarCurrentPage = (state: AppStateType) => {
    return state.products.similarProducts.currentPage
}

export const getSimilarPageSize = (state: AppStateType) => {
    return state.products.similarProducts.pageSize
}

export const getSimilarIsFetching = (state: AppStateType) => {
    return state.products.similarProducts.isFetching
}

export const getTotalSimilarProductsCount = (state: AppStateType) => {
    return state.products.similarProducts.totalProductsCount
}

export const getTotalProductsTypeCount = (state: AppStateType) => {
    return state.products.similarProducts.totalProductsTypeCount
}

export const getCatalogProducts = (state: AppStateType) => {
    return state.products.catalogProducts.items
}

export const getCatalogCurrentPage = (state: AppStateType) => {
    return state.products.catalogProducts.currentPage
}

export const getCatalogProfile = (state: AppStateType) => {
    return state.products.catalogProducts.profile
}

export const getCatalogPageSize = (state: AppStateType) => {
    return state.products.catalogProducts.pageSize
}

export const getCatalogIsFetching = (state: AppStateType) => {
    return state.products.catalogProducts.isFetching
}

export const getTotalCatalogProductsCount = (state: AppStateType) => {
    return state.products.catalogProducts.totalProductsCount
}