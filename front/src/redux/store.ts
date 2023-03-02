import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import {ActionTypeTour, tourReducer} from "./tour-reduser";
import {ActionTypeTicket, ticketReducer} from "./ticket-reducer";
import thunkMiddleware, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import {useDispatch} from "react-redux";


const rootReducer = combineReducers({
    tours:tourReducer,
    tickets:ticketReducer

})



export const store=legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootStateType=ReturnType<typeof rootReducer>


export type AppActionType = ActionTypeTicket|ActionTypeTour

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionType>

export type AppDispatch = typeof store.dispatch

export type TypedDispatch = ThunkDispatch<AppRootStateType, any, AppActionType>;

export const useAppDispatch= () => useDispatch<TypedDispatch>()



/*export const AppDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>


export const AppDispatch=()=>useDispatch<AppDispatchType>*/

// @ts-ignore
