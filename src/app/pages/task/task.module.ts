import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "@environments/environment";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";

import { TaskListComponent } from "./task-list/task-list.component";
import { TaskFormComponent } from "./task-form/task-form.component";
import { TaskItemComponent } from "./task-item/task-item.component";
import { reducer } from "./task.reducer";
import { TaskRoutingModule } from "./task-routing.module";
import { TaskComponent } from "./task.component";

@NgModule({
  declarations: [
    TaskComponent,
    TaskListComponent,
    TaskFormComponent,
    TaskItemComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TaskRoutingModule,
    StoreModule.forRoot({ tasks: reducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    FontAwesomeModule,
    NgbModalModule,
  ],
})
export class TaskModule {}
