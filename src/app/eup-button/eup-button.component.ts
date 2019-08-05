import { Component, Input } from '@angular/core';

@Component({
  selector: 'eup-button',
  templateUrl: './eup-button.component.html',
  styleUrls: ['./eup-button.component.scss']
})
export class EupButtonComponent {
  @Input()
  public buttonText: string;
  
  constructor() { }
}
