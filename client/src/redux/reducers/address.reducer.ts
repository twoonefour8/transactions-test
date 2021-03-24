import { IAddress, IFetchAddresses} from '../../types'
import { FETCH_ADDRESSES } from '../../constants'

type AddressState = {
    headers: string[],
    addresses: IAddress[] | undefined
}
const initialState: AddressState = {
    headers: ['Адрес', 'Сколько раз использован', ' '],
    addresses: []
}

export const addressReducer = (state = initialState, action: IFetchAddresses): AddressState => {
    switch (action.type) {
        case FETCH_ADDRESSES:
            return { ...state, addresses: action.payload }

        default:
            return state
    }
}

