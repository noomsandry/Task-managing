import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Task } from "@shared/models";

@Component({
  selector: "app-task-form",
  templateUrl: "./task-form.component.html",
  styleUrls: ["./task-form.component.scss"],
})
export class TaskFormComponent implements OnInit {
  @Input() task: Task = new Task();
  @Output() onSubmit = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  form: FormGroup;
  submitted: boolean;

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this._fb.group({
      id: [this.task.id],
      name: [this.task.name, Validators.required],
      date: [this.task.date],
      actif: [this.task.actif],
    });
  }

  submit() {
    this.submitted = true;
    if (this.form.valid) {
      const task = this.form.value;
      this.onSubmit.emit(task);
    }
  }

  cancel() {
    this.onCancel.emit();
  }
}
