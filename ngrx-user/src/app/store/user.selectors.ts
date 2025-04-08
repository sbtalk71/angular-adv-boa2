import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.reducers";

const userDataFeatureSelector=createFeatureSelector<UserState>("userStateData");

export const userArraySelector=createSelector(userDataFeatureSelector,state=>state.users);