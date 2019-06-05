import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-received-message',
  templateUrl: './received-message.component.html',
  styleUrls: ['./received-message.component.scss']
})
export class ReceivedMessageComponent implements OnInit {

  @Input() message: string;
  
  constructor() { }

  ngOnInit() {
  }

}
