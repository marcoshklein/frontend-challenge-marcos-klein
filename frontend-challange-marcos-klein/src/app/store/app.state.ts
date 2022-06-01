import { createAction, createReducer, on, props } from "@ngrx/store";
import { ICountry, ICountries } from "../models/contry";
import { IHolidays } from "../models/holiday"

export interface IappState {
    countries: ICountries[];
    holidays: IHolidays[];
    selectedCountry: ICountry;
}

export const appInitialState: IappState = {
    countries: [],
    holidays: [],
    selectedCountry: {code: '', name: ''} 
}


export const loadCountries = createAction('[APP] load countries');
export const successLoadCountries = createAction('[APP] success Load countries');
export const setCountries = createAction('[APP] set countries', props<{ payload: ICountries[] }>());

export const loadHolidaysByCountry = createAction('[APP] load holidays', props<{ payload: string }>());
export const setHolidays = createAction('[APP] set holidays', props<{ payload: IHolidays[] }>());
export const clearHolidays = createAction('[APP] clear holidays');

export const setSelectedContry = createAction('[APP] set Selected Contry', props<{ payload: ICountry }>());

export const appReducer = createReducer(
    appInitialState,
    on(setCountries, (state, { payload }) => {
        state = {
            ...state,
            countries: payload
        }
        return state;
    }),
    on(setHolidays, (state, { payload }) => {
        state = {
            ...state,
            holidays: payload
        }
        return state;
    }),
    on(setSelectedContry, (state, { payload }) => {
        state = {
            ...state,
            selectedCountry: payload
        }
        return state;
    }),
    on(clearHolidays, (state) => {
        state = {
            ...state,
            holidays: []
        }
        return state;
    }),
)