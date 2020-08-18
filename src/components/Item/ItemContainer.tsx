import React, {useEffect} from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import Item from './Item'
import {withRouter} from 'react-router-dom'
import {getItemElements, getItem, getUsers, requestItem, requestUsers} from '../../redux/reducers/item-reducer'
import {AppStateType} from '../../redux/redux-store'

type PropsType = {
    match: any
}

const ItemContainer: React.FC<MapPropsType & DispatchPropsType & PropsType> = (props) => {

    let itemId = props.match.params.itemId

    let refreshItem = () => {
        props.requestUsers()
        props.requestItem(itemId)
    }

    useEffect(() => {
        refreshItem()
    }, [itemId])

    return (
        <Item item={props.item}
              btn__basket_icon={props.elements.btn__basket_icon}
              users={props.users}/>
    )
}

let mapStateToProps = (state: AppStateType) => {
    return {
        item: getItem(state),
        elements: getItemElements(state),
        users: getUsers(state),
    }
}

type MapPropsType = ReturnType<typeof mapStateToProps>

type DispatchPropsType = {
    requestItem: (itemId: number) => void
    requestUsers: () => void
}

export default compose<React.FC>(connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps,
    {requestItem, requestUsers}), withRouter)(ItemContainer)