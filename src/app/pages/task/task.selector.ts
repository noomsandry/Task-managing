import { createFeatureSelector, createSelector } from "@ngrx/store";
import { selectAll, TaskState } from "./task.reducer";
import * as _ from "lodash";

export const getRouteState = createFeatureSelector<TaskState>("tasks");

export const selectAllTask = createSelector(getRouteState, selectAll);
export const selectOrderTasks = createSelector(selectAllTask, (entries) =>
  _.orderBy(entries, "date", "desc")
);
