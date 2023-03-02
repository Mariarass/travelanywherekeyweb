import {getTickets} from "../API/api";
import { changeIsFetchingTourAC} from "./tour-reduser";
import {AppThunk} from "./store";

export type  TypeTicket = {
    _id: string
    id__: number
    header: string
    price: string
    about: string
    time: string
    city: string
    where: string
    img: string

}

export type InitialStateType = {
    tickets: TypeTicket[] | null
    isFetching:boolean

}
const initialState: InitialStateType = {
    tickets: null,
    isFetching:false
}

type TypeChangeTicketAC = ReturnType<typeof changeTicketAC>
 type TypeChangeIsFetchingAC = ReturnType<typeof changeIsFetchingTicketAC>
export type ActionTypeTicket = TypeChangeTicketAC|TypeChangeIsFetchingAC


export const ticketReducer = (state = initialState, action: ActionTypeTicket): InitialStateType => {
    switch (action.type) {
        case "CHANGE-TICKET": {
            return {
                ...state,
                tickets: action.tickets

            }

        }
        case "CHANGE-IS-FETCHING-TICKET": {

            return {
                ...state,
                isFetching: action.value
            }
        }


        default:
            return state


    }

}

export const changeTicketAC = (tickets: TypeTicket[]) => {
    return {type: 'CHANGE-TICKET', tickets} as const
}
export const changeIsFetchingTicketAC = (value: boolean) => {
    return {type: 'CHANGE-IS-FETCHING-TICKET', value} as const
}


export const getTicketThunk = (): AppThunk => async (dispatch,getState) => {
    dispatch(changeIsFetchingTicketAC(true))

    const data = await getTickets(getState().tours.language)
    dispatch(changeTicketAC((data)))
    dispatch(changeIsFetchingTicketAC(false))


}