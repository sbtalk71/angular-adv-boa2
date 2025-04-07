import { createReducer, on } from "@ngrx/store";
import { decerement, decerementDouble, increment, incrementDouble, reset, resetDouble } from "./counter.actions";

let initialState = 0;
export const counterReducer = createReducer(
    initialState,
    on(increment, state => state + 1),
    on(decerement, state => state - 1),
    on(reset, state => 0)

);


//second slice of data

export interface DoubleCounter{
    counter:number
}

const doubleInitialState:DoubleCounter={
    counter:0
}

export const doubleCounterReducer=createReducer(
    doubleInitialState,
    on(incrementDouble,state=>({...state,counter:state.counter+2})),
    on(decerementDouble,state=>({...state,counter:state.counter-2})),
    on(resetDouble,state=>({...state,counter:0}))
);
