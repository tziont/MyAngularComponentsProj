import { Component, Input } from '@angular/core';

@Component({
  selector: 'eup-radio-button',
  templateUrl: './eup-radio-button.component.html',
  styleUrls: ['./eup-radio-button.component.scss']
})
export class EupRadioButtonComponent{
  @Input()
  public buttonText: string;
  constructor() { }

}
