import itemReducer, {actions, ItemStateType} from '../reducers/item-reducer'

let state: ItemStateType

beforeEach(() => {
    state = {
        item: item,
        elements: {
            btn__basket_icon: ''
        },
        users: users,
    }
})

export const item = {
    avatar: '',
    info: [],
    id: 0,
    img: '',
    logo_icon: '',
    logo_text: '',
    title: '',
    price: 0,
    discount: 0,
    lang: '',
    platform: [],
    type: [],
    date: '',
    dev: '',
    os: '',
    spu: '',
    ram: '',
    graph: '',
    hd: '',
    players: '',
    views: 0,
    rating: 0,
    slider_img: [],
    comments: [
        {
            id: 1,
            userId: 1,
            date: '',
            comment: ''
        }
    ],
}

const users = [
    {
        id: 1,
        name: '',
        avatar: '',
    }
]

test('setItemTest', () => {
    const newState = itemReducer(state, actions.setItem(item))
    expect(newState.item)
})

test('setUsersTest', () => {
    const newState = itemReducer(state, actions.setUsers(users))
    expect(newState.users)
})