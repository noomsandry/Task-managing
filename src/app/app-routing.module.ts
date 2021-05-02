import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesLayoutComponent } from "@layouts/pages-layout/pages-layout.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "tasks",
    pathMatch: "full",
  },
  {
    path: "",
    component: PagesLayoutComponent,
    children: [
      {
        path: "tasks",
        loadChildren: () =>
          import("./pages/task/task.module").then((m) => m.TaskModule),
      },
      {
        path: "comments",
        loadChildren: () =>
          import("./pages/comment/comment.module").then((m) => m.CommentModule),
      },
    ],
  },
  {
    path: "**",
    redirectTo: "users",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
