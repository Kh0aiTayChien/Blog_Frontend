import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  gridStyle = {
    width: '50%',
    textAlign: 'center'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
