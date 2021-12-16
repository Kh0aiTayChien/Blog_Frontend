import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-show',
  templateUrl: './post-show.component.html',
  styleUrls: ['./post-show.component.css']
})
export class PostShowComponent implements OnInit {
  gridStyle = {
    height: '100%',
    width: '50%',
    textAlign: 'center'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
