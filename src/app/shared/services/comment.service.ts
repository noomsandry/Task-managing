import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Comment } from "@shared/models";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CommentService {
  private url = `https://dummyapi.io/data/api/`;

  constructor(private _http: HttpClient) {}

  list(postId, limit = 10): Observable<Comment[]> {
    let path = `${this.url}post/${postId}/comment`;
    if (limit) {
      path = `${path}?limit=${limit}`;
    }
    return this._http
      .get(`${path}`)
      .pipe(map((data: any) => data.data.slice(limit)));
  }
}
