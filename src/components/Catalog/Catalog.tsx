import React from 'react'
import CatalogFormReduxForm, {CatalogFormPropsType} from './CatalogForm/CatalogForm'
import classes from './Catalog.module.scss'
import cn from 'classnames'
import CatalogProductsContainer from '../Products/CatalogProductsContainer'
import {CatalogStateType} from '../../redux/reducers/catalog-reducer'
import {SaveCatalogType} from '../../redux/reducers/products-reducer'

export type CatalogPropsType = {
    saveCatalog: SaveCatalogType
}

const Catalog: React.FC<CatalogStateType & CatalogPropsType & CatalogFormPropsType> = ({genre, platform, players, catalog, saveCatalog, resetCatalogForm, price}) => {

    const onChange = (formData: any) => {
        saveCatalog(1, 12, formData)
    }

    return (
        <div className={classes.catalog}>
            <div>
                <div className={classes.filter}>
                    <CatalogFormReduxForm players={players}
                                          catalog={catalog}
                                          genre={genre}
                                          platform={platform}
                                          resetCatalogForm={resetCatalogForm}
                                          onChange={onChange}
                                          price={price}/>
                </div>
            </div>
            <div className="relative">
                <h1 className={cn(classes.h1, 'h1-2')}>Каталог</h1>
                <div className="catalog__products">
                    <CatalogProductsContainer/>
                </div>
            </div>
        </div>
    )
}

export default Catalog