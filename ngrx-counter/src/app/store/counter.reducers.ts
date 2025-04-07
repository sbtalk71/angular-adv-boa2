import { createReducer, on } from "@ngrx/store";
import { decerement, increment, reset } from "./counter.actions";

let initialState = 0;
export const counterReducer = createReducer(
    initialState,
    on(increment, state => state + 1),
    on(decerement, state => state - 1),
    on(reset, state => 0)

);
