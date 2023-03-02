import {getCurrentTours, getTours, sendDate, sendEmail} from "../API/api";
import {Dispatch} from "redux";
import {AppActionType, AppRootStateType, AppThunk, store} from "./store";
import {ThunkAction} from "redux-thunk";

export type  TypeTour = {
    _id: string
    id__: number
    header: string
    description: string
    price: string
    time: string
    status: string
    statusHeader: string
    tour: string
    descriptionFull: string
    expectation: string[]
    transportDetailes: string
    free: string
    expenses: string[]
    transport: string
    place: string
    imgArray: string[],
    img: string

}

export type InitialStateType = {
    language: 'ru' | 'eng'
    tours: TypeTour[] | null
    currentTour: TypeTour | null
    favorite: number
    isFetching: boolean,
    sendEmailLoading: boolean,
    sendEmailSuccess: string
}
const initialState: InitialStateType = {
    language: 'ru',
    tours: null,
    currentTour: null,
    favorite: 0,
    isFetching: false,
    sendEmailLoading: false,
    sendEmailSuccess: ''
}

type TypeChangeTourAC = ReturnType<typeof changeTourAC>
type TypeChangeCurrentTourAC = ReturnType<typeof changeCurrentTourAC>
type TypeChangeFavoriteAC = ReturnType<typeof changeFavoriteAC>
export type TypeChangeIsFetchingAC = ReturnType<typeof changeIsFetchingTourAC>
type TypeChangeEmailLoadingAc = ReturnType<typeof changeSendLoading>
type TypeChangeEmailSuccess = ReturnType<typeof changeSendEmailSuccess>
type TypeChangeLanguage = ReturnType<typeof changeLanguage>

export type ActionTypeTour =
    TypeChangeTourAC
    | TypeChangeCurrentTourAC
    | TypeChangeFavoriteAC
    | TypeChangeIsFetchingAC
    | TypeChangeEmailLoadingAc
    | TypeChangeEmailSuccess
    | TypeChangeLanguage


export const tourReducer = (state = initialState, action: ActionTypeTour): InitialStateType => {
    switch (action.type) {
        case "CHANGE-TOUR": {
            return {
                ...state,
                tours: action.tours

            }

        }
        case "CHANGE-CURRENT-TOUR": {
            return {
                ...state,
                currentTour: action.tour

            }

        }
        case "CHANGE-FAVORITE": {
            return {
                ...state,
                favorite: action.len
            }
        }
        case "CHANGE-IS-FETCHING-TOUR": {
            return {
                ...state,
                isFetching: action.value
            }
        }
        case "CHANGE-SEND-LOADING": {
            return {
                ...state,
                sendEmailLoading: action.value
            }
        }
        case "CHANGE-SEND-EMAIL-SUCCESS": {
            return {
                ...state,
                sendEmailSuccess: action.value
            }
        }
        case "CHANGE-LANGUAGE":{
            return {
                ...state,
                language:action.language
            }
        }


        default:
            return state


    }

}

export const changeTourAC = (tours: TypeTour[]) => {
    return {type: 'CHANGE-TOUR', tours} as const
}
export const changeCurrentTourAC = (tour: TypeTour | null) => {
    return {type: 'CHANGE-CURRENT-TOUR', tour} as const
}

export const changeFavoriteAC = (len: number) => {
    return {type: 'CHANGE-FAVORITE', len} as const
}
export const changeIsFetchingTourAC = (value: boolean) => {
    return {type: 'CHANGE-IS-FETCHING-TOUR', value} as const
}
export const changeSendLoading = (value: boolean) => {
    return {type: 'CHANGE-SEND-LOADING', value} as const
}
export const changeSendEmailSuccess = (value: string) => {
    return {type: 'CHANGE-SEND-EMAIL-SUCCESS', value} as const
}
export const changeLanguage = (language: 'ru' | 'eng') => {
    return {type: 'CHANGE-LANGUAGE', language} as const
}
export const getToursThunk = (): AppThunk => async (dispatch,getState) => {
    dispatch(changeIsFetchingTourAC(true))

    const data = await getTours(getState().tours.language)
    dispatch(changeTourAC((data)))
    dispatch(changeIsFetchingTourAC(false))


}
export const getTourPageThunk = (id: any): AppThunk => async (dispatch,getState) => {
    dispatch(changeIsFetchingTourAC(true))
    const data = await getCurrentTours(id,getState().tours.language)
    dispatch(changeCurrentTourAC(data))
    dispatch(changeIsFetchingTourAC(false))


}
export const sendMessage = (value: sendDate, setStatus: any): AppThunk => async dispatch => {
    try {
        dispatch(changeSendLoading(true))
        await sendEmail(value)
        dispatch(changeSendLoading(false))
        dispatch(changeSendEmailSuccess('Мы отправили на Ваш email информацию'))
        setStatus({modal: 'success'})

    } catch (e) {
        dispatch(changeSendLoading(true))
        setStatus({modal: 'error'})

    }

}