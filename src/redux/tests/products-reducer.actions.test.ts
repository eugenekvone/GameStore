import {ItemType} from '../reducers/item-reducer'
import { item } from './item-reducer.actions.test'
import productsReducer, { ProductsStateType, actions } from '../reducers/products-reducer'

let state: ProductsStateType

beforeEach(() => {
    state = {
        products: products,
        discountProducts: products,
        popularProducts: products,
        recommendedProducts: products,
        similarProducts: similarProducts,
        catalogProducts: catalogProducts,
        elements: {
            btn__basket_icon: ''
        },
    }
})

const products = {
    items: [item],
    currentPage: 1,
    pageSize: 4,
    totalProductsCount: 30,
    isFetching: true,
}

const similarProductsOther = {
    totalProductsTypeCount: {
        'Action,RPG': 7,
        'Shooter': 8,
        'Action': 16,
        'Action,Adventure': 8,
        'Fighting': 3,
        'Racing': 2
    }
}

const catalogProductsOther = {
    profile: [''],
}

let similarProducts = Object.assign(similarProductsOther, products)
let catalogProducts = Object.assign(catalogProductsOther, products)

test('setProductsTest', () => {
    const newState = productsReducer(state, actions.setProducts(products.items))
    expect(newState.products.items)
})

test('toggleIsFetchingTest', () => {
    const newState = productsReducer(state, actions.toggleIsFetching(products.isFetching))
    expect(newState.products.isFetching)
})

test('toggleIsFetchingTest', () => {
    const newState = productsReducer(state, actions.setCurrentPage(products.currentPage))
    expect(newState.products.currentPage)
})

test('setDiscountProductsTest', () => {
    const newState = productsReducer(state, actions.setDiscountProducts(products.items))
    expect(newState.discountProducts.items)
})

test('toggleDiscountIsFetchingTest', () => {
    const newState = productsReducer(state, actions.toggleDiscountIsFetching(products.isFetching))
    expect(newState.discountProducts.isFetching)
})

test('setDiscountCurrentPageTest', () => {
    const newState = productsReducer(state, actions.setDiscountCurrentPage(products.currentPage))
    expect(newState.discountProducts.currentPage)
})

test('setPopularProductsTest', () => {
    const newState = productsReducer(state, actions.setPopularProducts(products.items))
    expect(newState.popularProducts.items)
})

test('togglePopularIsFetchingTest', () => {
    const newState = productsReducer(state, actions.togglePopularIsFetching(products.isFetching))
    expect(newState.popularProducts.isFetching)
})

test('setPopularCurrentPageTest', () => {
    const newState = productsReducer(state, actions.setPopularCurrentPage(products.currentPage))
    expect(newState.popularProducts.currentPage)
})

test('setRecommendedProductsTest', () => {
    const newState = productsReducer(state, actions.setRecommendedProducts(products.items))
    expect(newState.recommendedProducts.items)
})

test('toggleRecommendedIsFetchingTest', () => {
    const newState = productsReducer(state, actions.toggleRecommendedIsFetching(products.isFetching))
    expect(newState.recommendedProducts.isFetching)
})

test('setRecommendedCurrentPageTest', () => {
    const newState = productsReducer(state, actions.setRecommendedCurrentPage(products.currentPage))
    expect(newState.recommendedProducts.currentPage)
})

test('setSimilarProductsTest', () => {
    const newState = productsReducer(state, actions.setSimilarProducts(similarProducts.items))
    expect(newState.similarProducts.items)
})

test('toggleSimilarIsFetchingTest', () => {
    const newState = productsReducer(state, actions.toggleSimilarIsFetching(similarProducts.isFetching))
    expect(newState.similarProducts.isFetching)
})

test('setSimilarCurrentPageTest', () => {
    const newState = productsReducer(state, actions.setSimilarCurrentPage(similarProducts.currentPage))
    expect(newState.similarProducts.currentPage)
})

test('setTotalSimilarProductsCountTest', () => {
    const newState = productsReducer(state, actions.setTotalSimilarProductsCount(similarProducts.totalProductsCount))
    expect(newState.similarProducts.totalProductsCount)
})

test('setCatalogProductsTest', () => {
    const newState = productsReducer(state, actions.setCatalogProducts(catalogProducts.items))
    expect(newState.catalogProducts.items)
})

test('toggleCatalogIsFetchingTest', () => {
    const newState = productsReducer(state, actions.toggleCatalogIsFetching(catalogProducts.isFetching))
    expect(newState.catalogProducts.isFetching)
})

test('setCatalogCurrentPageTest', () => {
    const newState = productsReducer(state, actions.setCatalogCurrentPage(catalogProducts.currentPage))
    expect(newState.catalogProducts.currentPage)
})

test('setCatalogProfileTest', () => {
    const newState = productsReducer(state, actions.setCatalogProfile(catalogProducts.profile))
    expect(newState.catalogProducts.profile)
})