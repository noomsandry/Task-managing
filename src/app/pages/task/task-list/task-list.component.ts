import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Store } from "@ngrx/store";
import { Task } from "@shared/models";
import { selectOrderTasks } from "../task.selector";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.scss"],
})
export class TaskListComponent implements OnInit {
  @Output() onTaskClicked = new EventEmitter();
  @Output() onTaskEdited = new EventEmitter();
  @Output() onTaskDeleted = new EventEmitter();

  tasks: Task[] = [];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store
      .select(selectOrderTasks)
      .subscribe((tasks) => (this.tasks = tasks));
  }

  onClickTask(task) {
    this.onTaskClicked.emit(task);
  }

  onEditItem(task) {
    this.onTaskEdited.emit(task);
  }

  onDeleteItem(task) {
    this.onTaskDeleted.emit(task);
  }
}
