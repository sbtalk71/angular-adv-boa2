import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DoubleCounter } from "./counter.reducers";

const doubleCounterFeatureSelector=createFeatureSelector<DoubleCounter>('doubleData');

export const doubleCounterSelector=createSelector(doubleCounterFeatureSelector,state=>state.counter)