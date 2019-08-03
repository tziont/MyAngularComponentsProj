import { Component} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

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
  templateUrl: './componentspage.component.html',
  styleUrls: ['./componentspage.component.scss']
})

export class ComponentspageComponent {
  animal: string;
  name: string;

  myAanimal: string;
  myName: string;

  animalControl = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    { name: 'Dog', sound: 'Woof!' },
    { name: 'Cat', sound: 'Meow!' },
    { name: 'Cow', sound: 'Moo!' },
    { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
  ];
  constructor() {}

 }
export class TooltipOverviewExample { }

