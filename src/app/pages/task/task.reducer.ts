import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import { Task } from "@shared/models";
import * as TaskActions from "./task.action";

export const adapter: EntityAdapter<Task> = createEntityAdapter<Task>({
  selectId: (entry) => entry.id,
});

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal,
} = adapter.getSelectors();

export interface TaskState extends EntityState<Task> {}

export function reducer(state: TaskState | undefined, action: Action) {
  return taskReducer(state, action);
}

export const initialTaskState: TaskState = adapter.getInitialState({});

export const taskReducer = createReducer(
  initialTaskState,
  on(TaskActions.createTasks, (state, { task }) =>
    adapter.addOne(task, { ...state })
  ),
  on(TaskActions.deleteTasks, (state, { id }) =>
    adapter.removeOne(id, { ...state })
  ),
  on(TaskActions.updateTasks, (state, { task }) =>
    adapter.updateOne(
      {
        id: task.id,
        changes: task,
      },
      { ...state }
    )
  )
);
