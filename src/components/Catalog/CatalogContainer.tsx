import React, {useEffect} from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import Catalog, {CatalogPropsType} from './Catalog'
import {
    getPlatform,
    getPlayers,
    getGenre,
    getCatalog,
    requestPlatform,
    requestPlayers,
    requestGenre, resetCatalogForm, getPrice
} from '../../redux/reducers/catalog-reducer'
import {saveCatalog} from '../../redux/reducers/products-reducer'
import {AppStateType} from '../../redux/redux-store'
import {CatalogFormPropsType} from './CatalogForm/CatalogForm'

type PropsType = CatalogFormPropsType & CatalogPropsType;

const CatalogContainer: React.FC<MapPropsType & DispatchPropsType & PropsType> = (props) => {

    useEffect(() => {
        props.getGenre()
        props.getPlatform()
        props.getPlayers()
    }, [])

    return <Catalog genre={props.genre}
                    platform={props.platform}
                    players={props.players}
                    price={props.price}
                    catalog={props.catalog}
                    saveCatalog={props.saveCatalog}
                    resetCatalogForm={props.resetCatalogForm}/>
}

let mapStateToProps = (state: AppStateType) => {
    return {
        genre: getGenre(state),
        platform: getPlatform(state),
        players: getPlayers(state),
        price: getPrice(state),
        catalog: getCatalog(state)
    }
}

type MapPropsType = ReturnType<typeof mapStateToProps>

type DispatchPropsType = {
    getGenre: () => void,
    getPlatform: () => void,
    getPlayers: () => void,
}

export default compose<React.FC>(connect(mapStateToProps,
    {
        getGenre: requestGenre,
        getPlatform: requestPlatform,
        getPlayers: requestPlayers,
        saveCatalog,
        resetCatalogForm
    }))(CatalogContainer)