import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {IRx} from '../../../interfaces/IRx';
import {RxService} from '../../services/RxService/rx.service';
import {MatDialog,} from '@angular/material/dialog';
import { EupDialogContentComponent } from '../../eupcomponents/eup-dialog-content/eup-dialog-content.component';


@Component({
  selector: 'app-testpage',
  templateUrl: './eupcomponentspage.component.html',
  styleUrls: ['./eupcomponentspage.component.scss']
})
export class EupcomponentspageComponent implements OnInit {
 
  public displayedColumns: string[];
  public rxList: IRx[];
  public dataSource: MatTableDataSource<IRx>;
  public selection: SelectionModel<IRx>;

  constructor(
    private rxService: RxService,
    public dialog: MatDialog,
    ) {}

    openDialog():void {
      const dialogRef = this.dialog.open(EupDialogContentComponent, {
        width:'600px',
        hasBackdrop: true,
        panelClass: 'myClass'
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  isAllSelected(): boolean {
    const numSelected: number = this.selection.selected.length;
    const numRows: number = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  ngOnInit(): void {
    this.displayedColumns = ['selectColumn', 'doctorColumn', 'companyColumn', 'caseTypeDescriptionColumn', 'dateUpdatedColumn'];
    this.selection = new SelectionModel<IRx>(true, []);
    this.rxList = this.rxService.getData();
    this.dataSource = new MatTableDataSource<IRx>(this.rxList);
  }

  checkboxLabel(row?: IRx): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row`;
  }
}
