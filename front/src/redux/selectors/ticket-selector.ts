import {AppRootStateType} from "../store";
import {TypeTicket} from "../ticket-reducer";

export const ticketSelector =(state:AppRootStateType): TypeTicket[] | null => state.tickets.tickets
export const isFetchingSelectorTicket =(state:AppRootStateType):  boolean => state.tickets.isFetching