import { Component, Input } from '@angular/core';

@Component({
  selector: 'eup-button',
  templateUrl: './eup-button.component.html',
  styleUrls: ['./eup-button.component.scss']
})
export class EupButtonComponent {

  @Input()
  public style: any

  @Input()
  public buttonText: string;

  @Input()
	public useHandler(handler: Function): void {
		// If the handler needs its original context (this), the handler MUST be an arrow function
		handler();
  }

  @Input()
	public clickHandler: Function;
  
  constructor() { }
}
