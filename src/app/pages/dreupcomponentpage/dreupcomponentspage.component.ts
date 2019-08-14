import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {IRx} from '../../../interfaces/IRx';
import {RxService} from '../../services/RxService/rx.service';
import {MatDialog,} from '@angular/material/dialog';
import { DrDialogContentComponent } from '../../dreupcomponents/dr-dialog-content/dr-dialog-content.component';

@Component({
  selector: 'dreupcomponentspage',
  templateUrl: './dreupcomponentspage.component.html',
  styleUrls: ['./dreupcomponentspage.component.scss']
})

export class DreupcomponentspageComponent implements OnInit {

  public displayedColumns: string[];
  public rxList: IRx[];
  public dataSource: MatTableDataSource<IRx>;
  public selection: SelectionModel<IRx>;

  constructor(
    private rxService: RxService,
    public dialog: MatDialog,
    ) {}

    openDialog():void {
      const dialogRef = this.dialog.open(DrDialogContentComponent, {
        width:'600px',
        hasBackdrop: true,
        panelClass: 'myDrClass'
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
