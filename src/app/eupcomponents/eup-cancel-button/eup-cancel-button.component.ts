import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'eup-cancel-button',
  templateUrl: './eup-cancel-button.component.html',
  styleUrls: ['./eup-cancel-button.component.scss']
})
export class EupCancelButtonComponent implements OnInit {
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

  ngOnInit() {
  }

}
