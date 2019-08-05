import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {IRx} from '../../../interfaces/IRx';
import {RxService} from '../../services/RxService/rx.service';

export interface DialogData {
  animal: string;
  name: string;
}
export interface Animal {
  name: string;
  sound: string;
}
@Component({
  selector: 'app-testpage',
  templateUrl: './eupcomponentspage.component.html',
  styleUrls: ['./eupcomponentspage.component.scss']
})
export class EupcomponentspageComponent implements OnInit {
  animal: string;
  name: string;

  animalControl = new FormControl('', [Validators.required]);

  animals: Animal[] = [
    { name: 'Dog', sound: 'Woof!' },
    { name: 'Cat', sound: 'Meow!' },
    { name: 'Cow', sound: 'Moo!' },
    { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' }
  ];

  public displayedColumns: string[];

  public rxList: IRx[];

  constructor(private rxService: RxService) {}

  ngOnInit(): void {
    this.displayedColumns = ['doctorColumn', 'companyColumn', 'caseTypeDescriptionColumn', 'dateUpdatedColumn'];

    this.rxList = this.rxService.getData();
  }
}
