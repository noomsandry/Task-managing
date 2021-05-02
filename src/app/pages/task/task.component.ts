import { Component, OnInit, ViewChild } from "@angular/core";
import {
  NgbActiveModal,
  NgbModal,
  NgbModalRef,
} from "@ng-bootstrap/ng-bootstrap";
import { Store } from "@ngrx/store";
import { Task } from "@shared/models";
import { createTasks, deleteTasks, updateTasks } from "./task.action";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.scss"],
})
export class TaskComponent implements OnInit {
  @ViewChild("modal") modal: NgbModalRef;
  editingTask: Task = new Task();

  constructor(private modalService: NgbModal, private store: Store) {}

  ngOnInit(): void {}

  openForm(modal) {
    this.editingTask = new Task();
    this.modal = this.modalService.open(modal);
  }

  saveForm(task: Task) {
    if (task.id) {
      this.store.dispatch(
        updateTasks({
          task,
        })
      );
    } else {
      task.id = Date.now();
      task.date = new Date();
      this.store.dispatch(
        createTasks({
          task,
        })
      );
    }
    this.modal.close();
  }

  closeForm() {
    this.modal.close();
  }

  toogleActifTask(task: Task) {
    this.store.dispatch(
      updateTasks({
        task: {
          ...task,
          actif: !task.actif,
        },
      })
    );
  }

  onTaskEdited(task, modal) {
    this.editingTask = task;
    this.modal = this.modalService.open(modal);
  }

  onTaskDeleted(task) {
    this.store.dispatch(
      deleteTasks({
        id: task.id,
      })
    );
  }
}
