import { Post } from './../post.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() value: Post;

  constructor() {
    console.log(this.value);
   }

  ngOnInit() {
  }

}
