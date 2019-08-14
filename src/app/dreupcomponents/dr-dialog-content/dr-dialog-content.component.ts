import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'dr-dialog-content',
  templateUrl: './dr-dialog-content.component.html',
  styleUrls: ['./dr-dialog-content.component.scss']
})
export class DrDialogContentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DrDialogContentComponent>) { }

  closeDialog = () => {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
