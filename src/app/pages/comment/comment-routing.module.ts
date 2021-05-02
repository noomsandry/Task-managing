import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommentComponent } from "./comment.component";

const routes: Routes = [
  {
    path: "",
    component: CommentComponent,
    data: {
      title: "Commentaires",
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentRoutingModule {}
