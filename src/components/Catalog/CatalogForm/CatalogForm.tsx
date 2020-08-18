import React from 'react'
import {InjectedFormProps, reduxForm} from 'redux-form'
import classes from '../Catalog.module.scss'
import cn from 'classnames'
import Radio from '../../Commons/Radio/Radio'
import Checkbox from '../../Commons/Checkbox/Checkbox'
import {
    checkboxInput,
    createField, GetStringKeys,
    Input,
    radioInput,
} from '../../Commons/FormsColnrols/FormsControls'
import fillter__btn_icon from '../../../img/cross-1.svg'
import {CatalogStateType} from '../../../redux/reducers/catalog-reducer'

export type CatalogFormPropsType = {
    resetCatalogForm: () => void
}

export type CatalogFormValuesType = {
    price_starts: string
    price_up: string
}

type CatalogFormValuesTypeKeys = GetStringKeys<CatalogFormValuesType>

type PropsType = CatalogStateType & CatalogFormPropsType

const CatalogForm: React.FC<InjectedFormProps<PropsType> & PropsType> = ({handleSubmit, catalog, players, genre, platform, resetCatalogForm}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={classes.filter__block}>
                <p className={cn(classes.filter__block_title, 'text-11')}>Цена</p>
                <div className={classes.filter__input_wrap}>
                    <div className={classes.filter__input_inner}>
                        <p className={cn(classes.filter__input_text, 'text-12')}>от</p>
                        {createField<CatalogFormValuesTypeKeys>(
                            '199',
                            'price_starts',
                            Input,
                            {
                                type: 'number',
                                className: 'filter__input text-13'
                            })
                        }
                    </div>
                    <div className={classes.filter__input_inner}>
                        <p className={cn(classes.filter__input_text, 'text-12')}>до</p>
                        {createField<CatalogFormValuesTypeKeys>(
                            '699',
                            'price_up',
                            Input,
                            {
                                type: 'number',
                                className: 'filter__input text-13'
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={classes.filter__block}>
                <p className={cn(classes.filter__block_title, 'text-11')}>Статус</p>
                {catalog.map((c, index) =>
                    <Radio title={c} key={index} index={index} numb={c} name={'type'} value={c}
                           component={radioInput}/>)
                }
            </div>
            <div className={classes.filter__block}>
                <p className={cn(classes.filter__block_title, 'text-11')}>Жанр</p>
                {genre.map((g, index) =>
                    <Checkbox title={g} key={index} index={index} numb={1} name={'genre-' + g}
                              component={checkboxInput}/>)
                }
            </div>
            <div className={classes.filter__block}>
                <p className={cn(classes.filter__block_title, 'text-11')}>Платформа</p>
                {platform.map((p, index) =>
                    <Checkbox title={p} key={index} index={index} numb={2} name={'platform-' + p}
                              component={checkboxInput}/>)
                }
            </div>
            <div className={classes.filter__block}>
                <p className={cn(classes.filter__block_title, 'text-11')}>Режим игры</p>
                {players.map((p, index) =>
                    <Radio title={p} key={index} index={index} numb={p} name={'players'} value={p}
                           component={radioInput}/>)
                }
            </div>
            <div className={classes.filter__btn} onClick={resetCatalogForm}>
                <p className="text-11">Очистить фильтр</p>
                <img src={fillter__btn_icon} alt="cross" className={classes.filter__btn_icon}/>
            </div>
        </form>
    )
}

// @ts-ignore
const CatalogFormReduxForm = reduxForm<CatalogFormValuesType, PropsType>({form: 'edit-catalog'})(CatalogForm)
export default CatalogFormReduxForm