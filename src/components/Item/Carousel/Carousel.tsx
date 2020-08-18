import React, {useEffect} from 'react'
import classes from './Carousel.module.scss'
import OwlCarousel from 'react-owl-carousel'
import {getItem, ItemType, requestItem} from '../../../redux/reducers/item-reducer'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {AppStateType} from '../../../redux/redux-store'
import cn from 'classnames'

type PropsType = {
    img: ItemType['slider_img'],
    id: number
}

const Carousel: React.FC<MapPropsType & DispatchPropsType & PropsType> = (props) => {

    let refreshItem = () => {
        props.requestItem(props.id)
    }

    useEffect(() => {
        refreshItem()
    }, [props.id])

    return (
        <div className={classes.slider}>
            <OwlCarousel items={1} margin={30} autoplay={true} loop={true}>
                {props.item.slider_img.map(s =>
                    <div className={cn(classes.slider__item, 'item')} key={props.item.slider_img.indexOf(s)}>
                        <img src={s} alt="slider__img" className={classes.slider__img}/>
                    </div>
                )}
            </OwlCarousel>
        </div>
    )
}

let mapStateToProps = (state: AppStateType) => {
    return {
        item: getItem(state),
    }
}

type MapPropsType = ReturnType<typeof mapStateToProps>

type DispatchPropsType = {
    requestItem: (itemId: number) => void
}

export default compose<React.FC<PropsType>>(connect<MapPropsType, DispatchPropsType, PropsType, AppStateType>
(mapStateToProps, {requestItem}), withRouter)(Carousel)