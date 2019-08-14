import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.component.html',
  styleUrls: ['./dialog-content-example-dialog.component.scss']
})
export class DialogContentExampleDialogComponent{
  
  constructor(public dialogRef: MatDialogRef <DialogContentExampleDialogComponent>) { }
  closeDialog = () => {
    this.dialogRef.close();
  }

}
