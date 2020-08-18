import {instance} from './api'
import {ProductsType} from '../redux/reducers/products-reducer'

export const productsAPI = {
    getProducts(currentPage = 1, pageSize = 4) {
        return instance.get<ProductsType>(`items?_page=${currentPage}&_limit=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    getSimilarProducts(currentPage = 1, pageSize = 4, itemType: string, itemId: number) {
        return instance.get<ProductsType>(`items?type_like=${itemType}&id_ne=${itemId}&_page=${currentPage}&_limit=${pageSize}`,)
            .then(response => {
                return response.data
            })
    },
    getDiscountProducts(currentPage = 1, pageSize = 4) {
        return instance.get<ProductsType>(`items?discount_ne=0&_sort=discount&_order=desc&_page=${currentPage}&_limit=${pageSize}`,)
            .then(response => {
                return response.data
            })
    },
    getPopularProducts(currentPage = 1, pageSize = 4) {
        return instance.get<ProductsType>(`items?_sort=views&_order=desc&_page=${currentPage}&_limit=${pageSize}`,)
            .then(response => {
                return response.data
            })
    },
    getRecommendedProducts(currentPage = 1, pageSize = 4) {
        return instance.get<ProductsType>(`items?_sort=rating&_order=desc&_page=${currentPage}&_limit=${pageSize}`,)
            .then(response => {
                return response.data
            })
    },
    getCatalogProducts(currentPage = 1, pageSize = 4) {
        return instance.get<ProductsType>(`items?_page=${currentPage}&_limit=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    getResultCatalogProducts(currentPage = 1, pageSize = 12, platform: string, genre: string, players: string, type: string, price_starts: number, price_up: number, price: boolean) {

        var discount = ''

        var value, priceOrder

        if (type == 'Популярные') value = 'views'

        if (type == 'Рекомендации') value = 'rating'

        if (type == 'Скидки') {
            value = 'discount'
            discount = '&discount_ne=0'
        }

        if (price == true) priceOrder = ',desc'

        if (price == false) priceOrder = ',asc'


        return instance.get<ProductsType>(`items?_page=${currentPage}&_limit=${pageSize}${discount}&_sort=${value}&_order=desc&type_like=${genre}&platform_like=${platform}&players_like=${players}&price_gte=${price_starts}&price_lte=${price_up}`,)
            .then(response => {
                return response.data
            })
    }
}
