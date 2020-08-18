import catalogReducer, {actions, CatalogStateType} from '../reducers/catalog-reducer'

let state: CatalogStateType

beforeEach(() => {
    state = {
        genre: item,
        platform: item,
        players: item,
        price: item,
        catalog: item
    }
})

const item = ['']

test('setGenreTest', () => {
    const newState = catalogReducer(state, actions.setGenre(item))
    expect(newState.genre)
})

test('setPlatformTest', () => {
    const newState = catalogReducer(state, actions.setPlatform(item))
    expect(newState.platform)
})

test('setPlayersTest', () => {
    const newState = catalogReducer(state, actions.setPlayers(item))
    expect(newState.players)
})