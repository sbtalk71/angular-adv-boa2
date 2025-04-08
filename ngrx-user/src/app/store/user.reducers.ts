import { createReducer, on } from "@ngrx/store";
import { User } from "../user";
import { addUser } from "./user.actions";

export interface UserState{
    users:User[]
}

export const initialState:UserState={
    users:[]
}

export const userReducer=createReducer(
initialState,
on(addUser,(state,user)=>({...state,users:[...state.users,user]}))
);