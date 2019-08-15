import { Component, Input } from '@angular/core';

@Component({
  selector: 'dr-checkbox',
  templateUrl: './dr-checkbox.component.html',
  styleUrls: ['./dr-checkbox.component.scss']
})
export class DrCheckboxComponent {
  @Input()
  public buttonText: string;

  public checked: boolean;
  constructor() { }

}
