import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { Task } from "@shared/models";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-task-item",
  templateUrl: "./task-item.component.html",
  styleUrls: ["./task-item.component.scss"],
})
export class TaskItemComponent implements OnInit, OnChanges {
  @Input() task: Task;
  @Output() onDeleteItem = new EventEmitter();
  @Output() onEditItem = new EventEmitter();

  faEdit = faEdit;
  faTrash = faTrash;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {}

  edit(e) {
    e.stopPropagation();
    this.onEditItem.emit(this.task);
  }

  delete(e) {
    e.stopPropagation();
    this.onDeleteItem.emit(this.task);
  }
}
