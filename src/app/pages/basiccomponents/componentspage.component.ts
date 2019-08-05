import {Component, OnInit} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {IRx} from '../../../interfaces/IRx';
import {RxService} from '../../services/RxService/rx.service';
import {IAnimal} from '../../../interfaces/IAnimal';

@Component({
  selector: 'app-testpage',
  templateUrl: './componentspage.component.html',
  styleUrls: ['./componentspage.component.scss']
})

export class ComponentspageComponent implements OnInit {
  animal: string;
  name: string;

  animalControl = new FormControl('', [Validators.required]);

  animals: IAnimal[] = [
    { name: 'Dog', sound: 'Woof!' },
    { name: 'Cat', sound: 'Meow!' },
    { name: 'Cow', sound: 'Moo!' },
    { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
  ];

  public displayedColumns: string[];

  public rxList: IRx[];

  constructor(private rxService: RxService) {}

  ngOnInit(): void {
    this.displayedColumns = ['doctorColumn', 'companyColumn', 'caseTypeDescriptionColumn', 'dateUpdatedColumn'];

    this.rxList = this.rxService.getData();
  }

}
export class TooltipOverviewExample { }

