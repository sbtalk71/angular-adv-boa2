import { createAction } from "@ngrx/store";

export const increment=createAction("[counter] increment");
export const  decerement=createAction("[counter] decrement");
export const reset=createAction("[counter] reset");

export const incrementDouble=createAction("[double counter] increment");
export const  decerementDouble=createAction("[double counter] decrement");
export const resetDouble=createAction("[double counter] reset");

