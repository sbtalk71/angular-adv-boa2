import { createAction, props } from "@ngrx/store";
import { User } from "../user";

export const addUser=createAction(
    "[user] add User",
    props<User>()
);