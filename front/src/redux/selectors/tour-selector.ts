import {AppRootStateType} from "../store";
import {TypeTour} from "../tour-reduser";

export const tourSelector = (state: AppRootStateType): TypeTour[] | null => state.tours.tours
export const currentTourSelector = (state: AppRootStateType): TypeTour | null => state.tours.currentTour
export const currentTourHeaderSelector = (state: AppRootStateType): string | null => state.tours.currentTour && state.tours.currentTour.header
export const arrayPlaceSelector = (state: AppRootStateType): string[] | null => state.tours.currentTour && state.tours.currentTour.expectation
export const favoriteSelector = (state: AppRootStateType): number => state.tours.favorite
export const isFetchingSelector = (state: AppRootStateType): boolean => state.tours.isFetching
export const isLoadingSendEmail=(state:AppRootStateType)=>state.tours.sendEmailLoading
export const languageSelector=(state:AppRootStateType)=>state.tours.language