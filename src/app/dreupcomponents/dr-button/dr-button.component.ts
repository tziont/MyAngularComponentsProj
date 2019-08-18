import { Component, Input } from '@angular/core';

@Component({
  selector: 'dr-button',
  templateUrl: './dr-button.component.html',
  styleUrls: ['./dr-button.component.scss']
})
export class DrButtonComponent {
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
