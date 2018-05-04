import { Post } from './post.interface';
import { Component } from '@angular/core';
import { postList } from './../assets/items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: Post[] = [];

  constructor() {

    console.log(postList);
    this.data = postList;

    }
}
