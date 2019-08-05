import { Component, Input } from '@angular/core';

@Component({
  selector: 'eup-checkbox',
  templateUrl: './eup-checkbox.component.html',
  styleUrls: ['./eup-checkbox.component.scss']
})
export class EupCheckboxComponent{
  @Input()
  public buttonText: string;

  public checked: boolean;

  constructor() { }
  
}
