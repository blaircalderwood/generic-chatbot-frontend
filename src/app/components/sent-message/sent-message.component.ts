import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sent-message',
  templateUrl: './sent-message.component.html',
  styleUrls: ['./sent-message.component.scss']
})
export class SentMessageComponent implements OnInit {

  @Input() message: string;
  
  constructor() { }

  ngOnInit() {
  }

}
