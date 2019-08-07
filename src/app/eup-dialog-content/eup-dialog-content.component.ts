import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { reduce } from 'rxjs/operators';

@Component({
  selector: 'eup-dialog-content',
  templateUrl: './eup-dialog-content.component.html',
  styleUrls: ['./eup-dialog-content.component.scss']
})
export class EupDialogContentComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<EupDialogContentComponent>) { }
  closeDialog = () => {
    this.dialogRef.close();
  }
   cancel = "{color: #333}"
  ngOnInit() {
  }

}
