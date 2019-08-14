import {Component, OnInit} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {IRx} from '../../../interfaces/IRx';
import {RxService} from '../../services/RxService/rx.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogContentExampleDialogComponent} from '../../dialog-content-example-dialog/dialog-content-example-dialog.component';

@Component({
  selector: 'app-testpage',
  templateUrl: './componentspage.component.html',
  styleUrls: ['./componentspage.component.scss']
})

export class ComponentspageComponent implements OnInit {
 
  public displayedColumns: string[];

  public rxList: IRx[];

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  constructor(private rxService: RxService,public dialog: MatDialog) {}

  ngOnInit(): void {
    this.displayedColumns = ['doctorColumn', 'companyColumn', 'caseTypeDescriptionColumn', 'dateUpdatedColumn'];

    this.rxList = this.rxService.getData();
  }

}
export class TooltipOverviewExample { }

