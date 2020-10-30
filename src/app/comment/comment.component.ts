import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass']
})
export class CommentComponent implements OnInit {
  public comments = [];
  public commentName = '';
  public commentBody = '';

  myForm: FormGroup = new FormGroup({
    commentName: new FormControl('', Validators.required),
    commentBody: new FormControl('', Validators.required)
  });
  constructor() { }

  ngOnInit(): void {

  }
  addPost(): void {
    const post = {
      commentName: this.myForm.value.commentName,
      commentBody: this.myForm.value.commentBody
    };
    const list = this.getCommentList();
    list.push(post);
    localStorage.setItem('comments', JSON.stringify(list));
    this.myForm.reset();
  }
  getCommentList() {
    const commentData = localStorage.getItem('comments');
    let list = [];
    if (commentData) {
      try {
        list = JSON.parse(commentData) || [];
      } catch (error) {}
    }
    return list;
  }

}
