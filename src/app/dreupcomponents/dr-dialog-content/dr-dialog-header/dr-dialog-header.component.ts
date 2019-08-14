import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dr-dialog-header',
  templateUrl: './dr-dialog-header.component.html',
  styleUrls: ['./dr-dialog-header.component.scss']
})
export class DrDialogHeaderComponent implements OnInit {

@Input()
public dialogTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
