import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'eup-dialog-header',
  templateUrl: './eup-dialog-header.component.html',
  styleUrls: ['./eup-dialog-header.component.scss']
})
export class EupDialogHeaderComponent implements OnInit {

@Input()
public dialogTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
