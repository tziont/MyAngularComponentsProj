import { Component, Input } from '@angular/core';

@Component({
  selector: 'dr-dialog-close-button',
  templateUrl: './dr-dialog-close-button.component.html',
  styleUrls: ['./dr-dialog-close-button.component.scss']
})
export class DrDialogCloseButtonComponent {

  constructor() { }

 
  @Input()
	public useHandler(handler: Function): void {
		// If the handler needs its original context (this), the handler MUST be an arrow function
		handler();
  }

  @Input()
	public clickHandler: Function;

}
