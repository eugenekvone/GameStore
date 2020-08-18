import btn__basket_icon from '../../img/btn__basket_icon.svg'
import {ItemType} from './item-reducer'
import {BaseThunkType, InferActionsType} from '../redux-store'
import {productsAPI} from '../../api/products-api'
import {CatalogFormValuesType} from '../../components/Catalog/CatalogForm/CatalogForm'
import {ThunkAction, ThunkDispatch} from 'redux-thunk'

let State = {
    products: {
        items: [] as Array<ItemType>,
        currentPage: 1,
        pageSize: 4,
        totalProductsCount: 30,
        isFetching: false,
    },
    discountProducts: {
        items: [] as Array<ItemType>,
        currentPage: 1,
        pageSize: 4,
        totalProductsCount: 9,
        isFetching: false,
    },
    popularProducts: {
        items: [] as Array<ItemType>,
        currentPage: 1,
        pageSize: 4,
        totalProductsCount: 16,
        isFetching: false,
    },
    recommendedProducts: {
        items: [] as Array<ItemType>,
        currentPage: 1,
        pageSize: 4,
        totalProductsCount: 16,
        isFetching: false,
    },
    similarProducts: {
        items: [] as Array<ItemType>,
        currentPage: 1,
        pageSize: 4,
        isFetching: false,
        totalProductsCount: 0,
        totalProductsTypeCount: {
            'Action,RPG': 7,
            'Shooter': 8,
            'Action': 16,
            'Action,Adventure': 8,
            'Fighting': 3,
            'Racing': 2
        },
    },
    catalogProducts: {
        items: [] as Array<ItemType>,
        currentPage: 1,
        pageSize: 12,
        totalProductsCount: 30,
        isFetching: false,
        profile: [] as Array<string>,
    },
    elements: {
        btn__basket_icon: btn__basket_icon
    },
}

const productsReducer = (state = State, action: ActionsTypes): ProductsStateType => {
    switch (action.type) {

        case 'SET_PRODUCTS': {
            return {...state, products: {...state.products, items: action.products}}
        }
        case 'SET_CURRENT_PAGE': {
            return {...state, products: {...state.products, currentPage: action.currentPage}}
        }
        case 'TOGGLE_IS_FETCHING': {
            return {...state, products: {...state.products, isFetching: action.isFetching}}
        }

        case 'SET_DISCOUNT_PRODUCTS': {
            return {...state, discountProducts: {...state.discountProducts, items: action.products}}
        }
        case 'TOGGLE_DISCOUNT_IS_FETCHING': {
            return {...state, discountProducts: {...state.discountProducts, isFetching: action.isFetching}}
        }
        case 'SET_DISCOUNT_CURRENT_PAGE': {
            return {...state, discountProducts: {...state.discountProducts, currentPage: action.currentPage}}
        }

        case 'SET_SIMILAR_PRODUCTS': {
            return {...state, similarProducts: {...state.similarProducts, items: action.products}}
        }
        case 'TOGGLE_SIMILAR_IS_FETCHING': {
            return {...state, similarProducts: {...state.similarProducts, isFetching: action.isFetching}}
        }
        case 'SET_SIMILAR_CURRENT_PAGE': {
            return {...state, similarProducts: {...state.similarProducts, currentPage: action.currentPage}}
        }
        case 'SET_TOTAL_SIMILAR_PRODUCTS_COUNT': {
            return {
                ...state,
                similarProducts: {...state.similarProducts, totalProductsCount: action.totalProductsCount}
            }
        }

        case 'SET_POPULAR_PRODUCTS': {
            return {...state, popularProducts: {...state.popularProducts, items: action.products}}
        }
        case 'TOGGLE_POPULAR_IS_FETCHING': {
            return {...state, popularProducts: {...state.popularProducts, isFetching: action.isFetching}}
        }
        case 'SET_POPULAR_CURRENT_PAGE': {
            return {...state, popularProducts: {...state.popularProducts, currentPage: action.currentPage}}
        }

        case 'SET_RECOMMENDED_PRODUCTS': {
            return {...state, recommendedProducts: {...state.recommendedProducts, items: action.products}}
        }
        case 'TOGGLE_RECOMMENDED_IS_FETCHING': {
            return {...state, recommendedProducts: {...state.recommendedProducts, isFetching: action.isFetching}}
        }
        case 'SET_RECOMMENDED_CURRENT_PAGE': {
            return {...state, recommendedProducts: {...state.recommendedProducts, currentPage: action.currentPage}}
        }

        case 'SET_CATALOG_PRODUCTS': {
            return {...state, catalogProducts: {...state.catalogProducts, items: action.products}}
        }
        case 'TOGGLE_CATALOG_IS_FETCHING': {
            return {...state, catalogProducts: {...state.catalogProducts, isFetching: action.isFetching}}
        }
        case 'SET_CATALOG_CURRENT_PAGE': {
            return {...state, catalogProducts: {...state.catalogProducts, currentPage: action.currentPage}}
        }
        case 'SET_CATALOG_PROFILE': {
            return {...state, catalogProducts: {...state.catalogProducts, profile: action.profile}}
        }

        default:
            return state
    }
}

export const actions = {
    setProducts: (products: typeof State.products.items) => ({type: 'SET_PRODUCTS', products} as const),
    toggleIsFetching: (isFetching: typeof State.products.isFetching) => ({
        type: 'TOGGLE_IS_FETCHING',
        isFetching
    } as const),
    setCurrentPage: (currentPage: typeof State.products.currentPage) => ({
        type: 'SET_CURRENT_PAGE',
        currentPage
    } as const),

    setDiscountProducts: (products: typeof State.discountProducts.items) => ({
        type: 'SET_DISCOUNT_PRODUCTS',
        products
    } as const),
    toggleDiscountIsFetching: (isFetching: typeof State.discountProducts.isFetching) => ({
        type: 'TOGGLE_DISCOUNT_IS_FETCHING',
        isFetching
    } as const),
    setDiscountCurrentPage: (currentPage: typeof State.discountProducts.currentPage) => ({
        type: 'SET_DISCOUNT_CURRENT_PAGE',
        currentPage
    } as const),

    setPopularProducts: (products: typeof State.popularProducts.items) => ({
        type: 'SET_POPULAR_PRODUCTS',
        products
    } as const),
    togglePopularIsFetching: (isFetching: typeof State.popularProducts.isFetching) => ({
        type: 'TOGGLE_POPULAR_IS_FETCHING',
        isFetching
    } as const),
    setPopularCurrentPage: (currentPage: typeof State.popularProducts.currentPage) => ({
        type: 'SET_POPULAR_CURRENT_PAGE',
        currentPage
    } as const),

    setRecommendedProducts: (products: typeof State.recommendedProducts.items) => ({
        type: 'SET_RECOMMENDED_PRODUCTS',
        products
    } as const),
    toggleRecommendedIsFetching: (isFetching: typeof State.recommendedProducts.isFetching) => ({
        type: 'TOGGLE_RECOMMENDED_IS_FETCHING',
        isFetching
    } as const),
    setRecommendedCurrentPage: (currentPage: typeof State.recommendedProducts.currentPage) => ({
        type: 'SET_RECOMMENDED_CURRENT_PAGE',
        currentPage
    } as const),

    setSimilarProducts: (products: typeof State.similarProducts.items) => ({
        type: 'SET_SIMILAR_PRODUCTS',
        products
    } as const),
    toggleSimilarIsFetching: (isFetching: typeof State.similarProducts.isFetching) => ({
        type: 'TOGGLE_SIMILAR_IS_FETCHING',
        isFetching
    } as const),
    setSimilarCurrentPage: (currentPage: typeof State.similarProducts.currentPage) => ({
        type: 'SET_SIMILAR_CURRENT_PAGE',
        currentPage
    } as const),
    setTotalSimilarProductsCount: (totalProductsCount: typeof State.similarProducts.totalProductsCount) => ({
        type: 'SET_TOTAL_SIMILAR_PRODUCTS_COUNT',
        totalProductsCount
    } as const),

    setCatalogProducts: (products: typeof State.catalogProducts.items) => ({
        type: 'SET_CATALOG_PRODUCTS',
        products
    } as const),
    toggleCatalogIsFetching: (isFetching: typeof State.catalogProducts.isFetching) => ({
        type: 'TOGGLE_CATALOG_IS_FETCHING',
        isFetching
    } as const),
    setCatalogCurrentPage: (currentPage: typeof State.catalogProducts.currentPage) => ({
        type: 'SET_CATALOG_CURRENT_PAGE',
        currentPage
    } as const),
    setCatalogProfile: (profile: typeof State.catalogProducts.profile) => ({
        type: 'SET_CATALOG_PROFILE',
        profile
    } as const),
}

export const requestProducts = (page: number, pageSize: number): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.toggleIsFetching(true))
        dispatch(actions.setCurrentPage(page))

        let data = await productsAPI.getProducts(page, pageSize)
        dispatch(actions.setProducts(data))

        dispatch(actions.toggleIsFetching(false))
    }
}

export const requestSimilarProducts = (
    page: number,
    pageSize: number,
    itemType: string,
    itemId: number
): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.toggleSimilarIsFetching(true))
        dispatch(actions.setSimilarCurrentPage(page))

        let data = await productsAPI.getSimilarProducts(page, pageSize, itemType, itemId)
        dispatch(actions.setSimilarProducts(data))

        dispatch(actions.toggleSimilarIsFetching(false))
    }
}

export const requestDiscountProducts = (
    page: number,
    pageSize: number
): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.toggleDiscountIsFetching(true))
        dispatch(actions.setDiscountCurrentPage(page))

        let data = await productsAPI.getDiscountProducts(page, pageSize)
        dispatch(actions.setDiscountProducts(data))

        dispatch(actions.toggleDiscountIsFetching(false))
    }
}

export const requestPopularProducts = (
    page: number,
    pageSize: number
): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.togglePopularIsFetching(true))
        dispatch(actions.setPopularCurrentPage(page))

        let data = await productsAPI.getPopularProducts(page, pageSize)
        dispatch(actions.setPopularProducts(data))
        dispatch(actions.togglePopularIsFetching(false))
    }
}

export const requestRecommendedProducts = (
    page: number,
    pageSize: number
): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.toggleRecommendedIsFetching(true))
        dispatch(actions.setRecommendedCurrentPage(page))

        let data = await productsAPI.getRecommendedProducts(page, pageSize)
        dispatch(actions.setRecommendedProducts(data))

        dispatch(actions.toggleRecommendedIsFetching(false))
    }
}

export const requestCatalogProducts = (profile: typeof State.catalogProducts.profile,
                                       currentPage: number,
                                       pageSize: number,
                                       platform: string,
                                       genre: string,
                                       players: string,
                                       type: string,
                                       price_starts: number,
                                       price_up: number,
                                       price: boolean): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.toggleCatalogIsFetching(true))

        dispatch(actions.setCatalogCurrentPage(currentPage))
        dispatch(actions.setCatalogProfile(profile))

        let data = await productsAPI.getResultCatalogProducts(currentPage, pageSize, platform, genre, players, type, price_starts, price_up, price)
        dispatch(actions.setCatalogProducts(data))

        dispatch(actions.toggleCatalogIsFetching(false))
    }
}

export const saveCatalog = (
    currentPage = 1,
    pageSize: number,
    profile: typeof State.catalogProducts.profile = []
): ThunkType => async (dispatch) => {

    let keys: any = Object.keys(profile),
        platform: Array<string> | string = [],
        genre: Array<string> | string = [],
        type, price: any,
        players = '',
        price_starts = 0,
        price_up = 1000000

    for (var i = 0; i < Object.keys(profile).length; i++) {

        var name = keys[i]
        var item: any = profile[keys[i]]

        if (name == 'price') price = profile[keys[i]]

        if (!profile[keys[i]] == false) {

            if (name == 'type') type = item

            if (name == 'players') players = item

            if (name == 'price_starts') price_starts = item

            if (name == 'price_up') price_up = item

            name = keys[i].split('-')[0]
            item = keys[i].split('-')[1]

            if (name == 'platform') platform.push(item)

            if (name == 'genre') genre.push(item)
        }
    }

    platform = platform.sort().join()
    genre = genre.sort().join()

    dispatch(requestCatalogProducts(profile, currentPage, pageSize, platform, genre, players, type, price_starts, price_up, price))
}

export const requestTotalSimilarProductsCount = (
    totalProductsTypeCount: number
): ThunkType => async (dispatch) => {
    dispatch(actions.setTotalSimilarProductsCount(totalProductsTypeCount))
}

export const discountBtn = (discount: number) => {
    if (discount > 0) {
        return 'discount'
    }
}

export const productPrice = (price: number) => {
    if (price > 0) {
        return price + ' P'
    } else {
        return 'Free'
    }
}

function decimalAdjust(value: number, exp: any) {

    if (typeof exp === 'undefined' || +exp === 0) {
        return Math['round'](value)
    }

    value = +value
    exp = +exp

    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN
    }

    let NewValue: number | Array<string> = value.toString().split('e')
    NewValue = Math['round'](+(NewValue[0] + 'e' + (NewValue[1] ? (+NewValue[1] - exp) : -exp)))
    NewValue = NewValue.toString().split('e')

    return +(NewValue[0] + 'e' + (NewValue[1] ? (+NewValue[1] + exp) : exp))
}

let Round10 = function (value: number, exp: any) {
    return decimalAdjust(value, exp)
}

export const dateСonverter = (date: string) => {

    let monthArr = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

    function getMonth(date: Date) {
        return 1 + +date.getMonth()
    }

    let newDate = new Date(Date.parse(date))

    return newDate.getDate() + ' ' + monthArr[getMonth(newDate) - 1] + ' ' + newDate.getFullYear() + ' г.'
}

export const ratingResult = (rating: number) => {
    return Round10((rating - Math.floor(rating)), -1)
}

export const ratingList = (rating: number) => {
    const list = [];

    const styleDisable = {
        opacity: 0
    };

    const styleRating = {
        width: ratingResult(rating) * 100 + '%',
    };

    const styleNo = {};

    for (var i = 1; 5 >= i; i++) {

        list.push(i);

        (i > Math.floor(rating)) ? list[i-1] = styleDisable : list[i-1] = styleNo;

        if (i == Math.ceil(rating)) list[i-1] = styleRating;
    }

    return list;
}

export const productStartingPrice = (price: number, discount: number) => {
    return (price + discount) + ' P'
}

export default productsReducer

export type ProductsStateType = typeof State
export type ProductsType = typeof State.products.items
export type SaveCatalogType = typeof saveCatalog
export type totalProductsTypeCountType = typeof State.similarProducts.totalProductsTypeCount
type ThunkType = BaseThunkType<ActionsTypes>
type ActionsTypes = InferActionsType<typeof actions>