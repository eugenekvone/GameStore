import React from 'react'
import './App.css'
import {initializeApp} from './redux/reducers/app-reducer'
import store, {AppStateType} from './redux/redux-store'
import Navbar from './components/Navbar/Navbar'
import {compose} from 'redux'
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom'
import {connect, Provider} from 'react-redux'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import ItemContainer from './components/Item/ItemContainer'
import CatalogContainer from './components/Catalog/CatalogContainer'

const App: React.FC<MapPropsType & DispatchPropsType> = () => {
    return (
        <div className='app-wrapper'>
            <Navbar/>
            <main className={'container'}>
                <Switch>
                    <Route exact path='/' render={() => <Main/>}/>
                    <Route path='/item/:itemId?' render={() => <ItemContainer/>}/>
                    <Route path='/catalog' render={() => <CatalogContainer/>}/>
                </Switch>
            </main>
            <Footer/>
        </div>
    )
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}

let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

const GameStoreJSApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default GameStoreJSApp
