import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {

  messages = [
    {
      isSentMessage: false,
      text: 'This is a received message'
    },
    {
      isSentMessage: true,
      text: 'This is a sent message'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
