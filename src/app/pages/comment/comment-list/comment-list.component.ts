import { Component, OnInit } from "@angular/core";
import { CommentService } from "@shared/services";
import { Comment } from "@shared/models/comment.model";
@Component({
  selector: "app-comment-list",
  templateUrl: "./comment-list.component.html",
  styleUrls: ["./comment-list.component.scss"],
})
export class CommentListComponent implements OnInit {
  comments: Comment[] = [];
  constructor(private _commentService: CommentService) {}

  ngOnInit(): void {
    this._commentService
      .list("SFAt3mJK0qu4QOd9LgSX", 2)
      .subscribe((comments) => (this.comments = comments));
  }
}
