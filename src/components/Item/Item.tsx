import React from 'react'
import classes from './Item.module.scss'
import cn from 'classnames'
import Review from './Review/Review'
import {dateСonverter, discountBtn} from '../../redux/reducers/products-reducer'
import SimilarProductsContainer from '../Products/SimilarProductsContainer'
import views_icon from '../../img/eye_black.svg'
import Rating from '../Commons/Rating/Rating'
import {ItemType, UsersType} from '../../redux/reducers/item-reducer'
import Carousel from './Carousel/Carousel'

type PropsType = {
    item: ItemType,
    btn__basket_icon: string,
    users: UsersType
}

const Item: React.FC<PropsType> = ({item, btn__basket_icon, users}) => {
    return (
        <div className={cn(classes.item, 'item')}>
            <div className={classes.h1_wrap}>
                <h1 className={cn(classes.h1, 'h1-1')}>{item.title}</h1>
                <div className={classes.views}>
                    <img src={views_icon} alt="views_icon" className={classes.views_icon}/>
                    <p className={classes.views_text}>{item.views}</p>
                </div>
            </div>
            <div className={classes.inner}>
                <div className="avatar-wrap">
                    <div className={classes.avatar}>
                        <img src={item.img} alt="avatar" className='img-cover'/>
                        <div className={classes.rating_wrap}>
                            <Rating rating={item.rating} itemId={item.id}/>
                        </div>
                    </div>
                    <div className={cn('btn_1', classes.btn_1, discountBtn(item.discount))}>
                        <div className={cn(classes.btn_1_text_1, 'btn_1__inner btn_1__price')}>
                            <p className="btn_1__price_text">{item.price} Р</p>
                        </div>
                        <div className="btn_1__inner btn_1__action">
                            <p className={cn('btn_1__action_text', classes.btn_1_text_2)}>Выгодно</p>
                        </div>
                        <div className="btn_1__basket">
                            <p className={cn('btn_1__basket_text', classes.btn_1_text_3)}>В корзину</p>
                            <img src={btn__basket_icon} alt="btn_1__icon" className="btn_1__icon"/>
                        </div>
                    </div>
                </div>
                <div className={classes.block}>
                    {item.slider_img.length && <Carousel img={item.slider_img} id={item.id}/>}
                    <div className={classes.info}>
                        <p className="text-1">Язык:</p>
                        <p className="text-7">{item.lang}</p>
                        <p className="text-1">Платформа:</p>
                        <div className={classes.info__text_wrap}>
                            {item.platform.map(p =>
                                <p className="text-7" key={item.platform.indexOf(p)}>{p}<span>,</span></p>
                            )}
                        </div>
                        <p className="text-1">Тип:</p>
                        <div className={classes.info__text_wrap}>
                            {item.type.map(t =>
                                <p className="text-7" key={item.type.indexOf(t)}>{t}<span>,</span></p>
                            )}
                        </div>
                        <p className="text-1">Дата выхода:</p>
                        <p className="text-7">{dateСonverter(item.date)}</p>

                        <p className="text-1">Разработчик:</p>
                        <p className="text-7">{item.dev}</p>
                    </div>
                    <div className={classes.info}>
                        <p className="text-1">ОС:</p>
                        <p className="text-7">{item.os}</p>

                        <p className="text-1">Процессор:</p>
                        <p className="text-7">{item.spu}</p>

                        <p className="text-1">Оп.память:</p>
                        <p className="text-7">{item.ram}</p>

                        <p className="text-1">Видеокарта:</p>
                        <p className="text-7">{item.graph}</p>

                        <p className="text-1">Место на HD:</p>
                        <p className="text-7">{item.hd}</p>
                    </div>
                    <div className={classes.similar}>
                        <SimilarProductsContainer itemType={item.type[0]} itemId={item.id}/>
                    </div>
                    <div className={classes.reviews}>
                        <div className={classes.reviews__h2_wrap}>
                            <h2 className="h2-1">Отзывы</h2>
                            <p className={cn(classes.reviews__h2_numb, 'text-8')}>{item.comments.length}</p>
                        </div>
                        <div className={classes.reviews__inner}>
                            {item.comments.map(r =>
                                <Review key={r.id} comment={r.comment} date={r.date} userId={r.userId} users={users}/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item