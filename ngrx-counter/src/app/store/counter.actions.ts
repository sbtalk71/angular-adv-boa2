import { createAction } from "@ngrx/store";

export const increment=createAction("[counter] increment");
export const  decerement=createAction("[counter] decrement");
export const reset=createAction("[counter] reset");