import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CommentRoutingModule } from "./comment-routing.module";
import { CommentItemComponent } from "./comment-item/comment-item.component";
import { CommentListComponent } from "./comment-list/comment-list.component";
import { CommentComponent } from "./comment.component";

@NgModule({
  declarations: [CommentComponent, CommentItemComponent, CommentListComponent],
  imports: [CommonModule, CommentRoutingModule],
})
export class CommentModule {}
