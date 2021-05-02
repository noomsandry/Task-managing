import { createAction, props } from "@ngrx/store";
import { Task } from "@shared/models";

const source = "tasks page";

export const loadTasks = createAction(`[${source}] load`);

export const createTasks = createAction(
  `[${source}] create`,
  props<{ task: Task }>()
);

export const updateTasks = createAction(
  `[${source}] update`,
  props<{ task: Task }>()
);

export const deleteTasks = createAction(
  `[${source}] list`,
  props<{ id: number }>()
);
