import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'eup-dialog-content',
  templateUrl: './eup-dialog-content.component.html',
  styleUrls: ['./eup-dialog-content.component.scss']
})
export class EupDialogContentComponent {

  constructor(public dialogRef:MatDialogRef<EupDialogContentComponent>) { }
  closeDialog = () => {
    this.dialogRef.close();
  }

}
