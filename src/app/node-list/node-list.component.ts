import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-node-list',
  templateUrl: './node-list.component.html',
  styleUrls: ['./node-list.component.scss']
})
export class NodeListComponent implements OnInit {
  gridStyle = {
    width: '25%',
    textAlign: 'center',
  };

  constructor() { }
  ngOnInit() {
  }

}
